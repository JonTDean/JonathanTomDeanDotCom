import { findIndex } from "lodash";
import React, { useEffect } from "react";
import ProjectCardList from "../../components/Projects/ProjectCardList";
import ProjectHeader from "../../components/Projects/ProjectHeader";
import {
	addApolloState,
	initializeApollo,
} from "../../lib/GraphQL/apolloClient";
import GET_ALL_PROJECTS_QUERY from "../../lib/GraphQL/queries/GET_ALL_PROJECTS.query";
// import ProjectInfoType from "../../lib/types/ProjectInfo.type";
import ProjectType from "../../lib/types/ProjectType";

interface IProjectsProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	__APOLLO_STATE__: any;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Projects = ({ __APOLLO_STATE__ }: IProjectsProps) => {
	const [projectsList, setProjectsList] = React.useState<ProjectType[]>([]);

	useEffect(() => {
		// These object keys are the representations of the GraphQL query variables
		// as a flatMap array of the individual objects.
		Object.keys(__APOLLO_STATE__).map((graphItem: string) => {
			if (
				// Check the current apollo state flatMap to see
				// if it contains specifically the projects data
				__APOLLO_STATE__[graphItem].__typename === "Project" &&
				// Return the value of the index if the item is found in the array
				// If greater than -1, the item was found
				findIndex(projectsList, __APOLLO_STATE__[graphItem]) === -1
			) {
				setProjectsList([...projectsList, __APOLLO_STATE__[graphItem]]);
			}
		});
		console.log("PROJECTS LIST: ", projectsList);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [projectsList]);

	return (
		<div className="flex flex-col items-center">
			<ProjectHeader />
			<ProjectCardList projectsList={projectsList} />
		</div>
	);
};

// This function gets called at build time
export async function getStaticProps() {
	// Initialize Apollo Client
	// If not done getStaticProps will not hydrate
	// the client tree via the Apollo client
	// on the server properly
	const apolloClient = initializeApollo();

	// Call an external API endpoint to get posts
	await apolloClient.query({
		query: GET_ALL_PROJECTS_QUERY,
	});

	// Using the HOC addApolloState we are able to
	// Check the props of the current component at runtime
	// and extract those props to the StaticProps object.
	return addApolloState(apolloClient, {
		props: {},
		revalidate: 1,
	});
}

export default Projects;
