// NextJS
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
// GraphQL
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/GraphQL/apolloClient";
import GET_ALL_PROJECTS_QUERY from "../../lib/GraphQL/queries/GET_ALL_PROJECTS.query";
import ProjectType from "../../lib/Utils/types/ProjectType";
// Utils
import { filter, find } from "lodash";

// Need this for the images otherwise they don't load
const imageLoader = ({ src }: { src: string }) =>
	src == undefined ? "https://source.unsplash.com/random/200x200" : src;

const DynamicProjectPage = () => {
	// Retrieve the project "ID"(project title) from the URL
	const projectID = useRouter().query.id;
	// Retrieve the current page data from
	// the graphQL query.
	const projectQuery = useQuery(GET_ALL_PROJECTS_QUERY);
	const [currProject, setCurrProject] = useState<ProjectType | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	// Capture the effects from the apollo side
	// and store it in a useful casche
	useEffect(() => {
		console.log("PROJECT: ", projectQuery);
		if (projectQuery.data !== undefined && projectQuery.data !== null) {
			setCurrProject(
				find(projectQuery.data.getAllProjects, {
					title: projectID,
				})
			);
		}

		// Set Loading Property
		setLoading(projectQuery.loading);
	}, [projectID, projectQuery]);

	useEffect(() => {
		console.log("CURR PROJECT: ", currProject);
	}, [currProject]);

	if (!loading && currProject !== null) {
		return (
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col items-center">
					<h1 className="text-2xl font-RMO">{currProject.title}</h1>
					<Image
						loader={imageLoader}
						src={currProject.image}
						alt={`Image for ${currProject.title}`}
						width={200}
						height={200}
					/>
				</div>
				<div className="py-9">
					<p>{currProject.description}</p>
				</div>
			</div>
		);
	}

	return <div>Loading...</div>;
};

export default DynamicProjectPage;

// Get Static Props
export async function getStaticProps() {
	return {
		props: {},
		revalidate: 1,
	};
}

// Dynamically generate the project routes
export async function getStaticPaths() {
	// let data = await fetch("https://.../posts");
	const apolloClient = initializeApollo();

	// Call an external API endpoint to get posts
	await apolloClient.query({
		query: GET_ALL_PROJECTS_QUERY,
	});

	// Extract the data from the cache via the extract function
	const queryData = apolloClient.cache.extract();

	// Using the data from the API, create a list of paths
	// and their corresponding slugs by filtering through the
	// flat map, and grabbing the title of each project.
	const data = filter(
		queryData,
		(item: ProjectType) => item.__typename === "Project"
	);

	// Get the paths we want to pre-render based on posts
	// Map the data the project.title
	const projectTitles = data.map((project: ProjectType) => {
		return {
			params: { id: project.title },
		};
	});

	// We'll pre-render only these paths at build time.
	return { paths: projectTitles, fallback: false };
}
