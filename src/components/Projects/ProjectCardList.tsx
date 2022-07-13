import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./Projects";

// ProjectCardList is a component that displays a list of ProjectCards.
const ProjectCardList = () => {
	return (
		<div>
			{/* Enumerator composition pattern */}
			{/* What I plan to do is have this dynamically */}
			{/* hydrate from a server that contains a list */}
			{/* of projects along with the respective information */}
			{/* for each project. */}
			{projects.map((project) => {
				return (
					<div key={project.title}>
						<ProjectCard {...project} />
					</div>
				);
			})}
		</div>
	);
};

export default ProjectCardList;
