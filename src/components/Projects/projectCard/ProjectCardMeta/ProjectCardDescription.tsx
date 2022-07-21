import React from "react";

type ProjectCardDescriptionPropsType = {
	description: string;
};

const ProjectCardDescription = ({ description }: ProjectCardDescriptionPropsType) => {
	return (
		<div className="break-words w-[15rem] py-3">
			{/* 
			<u className="text-[#1A1A1A]">
				<h2 className="font-RMO text-[#1A1A1A]">Description</h2>
			</u> 
			*/}
			<p className="font-Karla text-[#E0E0E0] h-[9rem] overflow-y-auto">
				{description}
			</p>
		</div>
	);
};

export default ProjectCardDescription;
