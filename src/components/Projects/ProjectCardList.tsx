import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./Projects";

// ProjectCardList is a component that displays a list of ProjectCards.
const ProjectCardList = () => {
	return (
		<ul className="flex flex-row flex-wrap items-center justify-center">
			{/* Enumerator composition pattern */}
			{/* What I plan to do is have this dynamically */}
			{/* hydrate from a server that contains a list */}
			{/* of projects along with the respective information */}
			{/* for each project. */}
			{projects.map((project, idx) => {
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
