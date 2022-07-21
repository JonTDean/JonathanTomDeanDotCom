import { gql, useQuery } from "@apollo/client";
import React from "react";
import ProjectCardList from "../../components/Projects/ProjectCardList";
import ProjectHeader from "../../components/Projects/ProjectHeader";
import ProjectCardProps from "../../lib/types/ProjectCard.props";
// import ProjectCardProps from "../../lib/types/ProjectCard.props";

const projects = (props) => {
	return (
		<div className="flex flex-col items-center">
			<ProjectHeader />
			<ProjectCardList />
		</div>
	);
};

// This function gets called at build time
export async function getStaticProps() {
	// Call an external API endpoint to get posts
	const getProjectsQuery = gql`
		query {
			getAllProjects {
				id
				title
				projectInfo {
					id
					site
					blog
				}
			}
		}
	`;

	const apolloClient = initializeApollo();

	// const res = await fetch("https://.../posts");
	// const posts = await res.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts,
		},
	};
}

export default projects;
