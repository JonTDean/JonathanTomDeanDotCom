import React from "react";

type ProjectCardHeaderPropsType = {
	title: string;
};

const ProjectCardHeader = ({ title }: ProjectCardHeaderPropsType) => {
	return (
		<div className="pb-3 border-b-[0.09rem] border-[#1A1A1A]">
			<h1 className="font-RMO text-[#DE4B51]">{title}</h1>
		</div>
	);
};

export default ProjectCardHeader;
