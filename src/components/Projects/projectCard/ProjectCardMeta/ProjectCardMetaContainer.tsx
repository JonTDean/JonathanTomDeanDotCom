import React from "react";
import ProjectInfoType from "../../../../lib/Utils/types/ProjectInfo.type";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardHeader from "./ProjectCardHeader";
import ProjectCardLinks from "./ProjectCardLinks";

type ProjectCardMetaPropsType = {
	title: string;
	description: string;
	projectInfo: ProjectInfoType;
};

// Links to information related to the project.
const ProjectCardMetaContainer = ({
	title,
	description,
	projectInfo: { site, repo, blog },
}: ProjectCardMetaPropsType) => {
	return (
		<div>
			<div className="flex flex-col items-center py-6 px-6 justify-around space-y-5">
				{/* Title Header */}
				<ProjectCardHeader title={title} />

				{/* Description Area */}
				<ProjectCardDescription description={description} />

				{/*  Links to information related to the project. */}
				<ProjectCardLinks site={site} repo={repo} blog={blog} />
			</div>
		</div>
	);
};

export default ProjectCardMetaContainer;
