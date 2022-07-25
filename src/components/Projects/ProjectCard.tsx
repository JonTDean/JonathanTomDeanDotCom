// NextJS
import React from "react";
// Projects
import ProjectType from "../../lib/Utils/types/ProjectType";
import ProjectCardMetaContainer from "./projectCard/ProjectCardMeta/ProjectCardMetaContainer";
import ProjectCardImage from "./projectCard/ProjectCardImage";

// ProjectCard is a component that displays a single project.
const ProjectCard = ({
	title,
	description,
	projectInfo,
	image,
}: ProjectType) => {
	return (
		<div className="flex flex-row m-3 p-3 items-center bg-[#4718FF] rounded-[21px]">
			{/* Image for the Card */}
			<ProjectCardImage image={image} title={title} />

			{/* Card Meta Info */}
			<ProjectCardMetaContainer
				title={title}
				description={description}
				projectInfo={projectInfo}
			/>
		</div>
	);
};

export default ProjectCard;
