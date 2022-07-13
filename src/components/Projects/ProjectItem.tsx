import React from "react";
import ProjectCardProps from "../../../lib/types/ProjectCard.props";

const ProjectCard = ({ title, description, info, image }: ProjectCardProps) => {
	return (
		<div>
			{/* Image for the Card */}
			<div>{image}</div>
			<div>
				{/* Title Header */}
				<h1>{title}</h1>
				{/* Description Area */}
				<div>
					<h2>Description</h2>
					<p>{description}</p>
				</div>
				{/* Information on how to interact with the program */}
				<div>
					{/* Site Link */}
					{info.site}

					{/* Repository Link */}
					{info.repo}

					{/* Blog link */}
					{info.blog}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
