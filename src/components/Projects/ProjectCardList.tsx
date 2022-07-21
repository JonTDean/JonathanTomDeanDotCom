// NextJS
import React from "react";
// Projects
import ProjectCard from "./ProjectCard";
import projectsList from "./Projects";

// ProjectCardList is a component that displays a list of ProjectCards.
const ProjectCardList = () => {
	// Enumerator composition pattern
	// What I plan to do is have this dynamically
	// hydrate from a server that contains a list
	// of projects along with the respective information
	// for each project.
	return (
		<ul className="flex flex-row flex-wrap items-center justify-center">
			{projectsList.map((project, idx) => {
				return (
					<li key={`${project.title}_${idx}`}>
						<ProjectCard {...project} />
					</li>
				);
			})}
		</ul>
	);
};

export default ProjectCardList;
