// NextJS
import React from "react";
// Projects
import ProjectCardProps from "../../lib/types/ProjectCard.props";
import ProjectCardMetaContainer from "./projectCard/ProjectCardMeta/ProjectCardMetaContainer";
import ProjectCardImage from "./projectCard/ProjectCardImage";

// ProjectCard is a component that displays a single project.
const ProjectCard = ({ title, description, info, image }: ProjectCardProps) => {
	return (
		<div className="flex flex-row m-3 p-3 items-center bg-[#4718FF] rounded-[21px]">
			{/* Image for the Card */}
			<ProjectCardImage image={image} title={title} />

			{/* Card Meta Info */}
			<ProjectCardMetaContainer
				title={title}
				description={description}
				info={info}
			/>
		</div>
	);
};

export default ProjectCard;
