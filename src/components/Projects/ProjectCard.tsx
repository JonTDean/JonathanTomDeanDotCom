import Image from "next/image";
import React from "react";
import ProjectCardProps from "../../../lib/types/ProjectCard.props";

// ProjectCard is a component that displays a single project.
const ProjectCard = ({ title, description, info, image }: ProjectCardProps) => {
	return (
		<div>
			{/* Image for the Card */}
			<div>
				<Image
					src={image}
					width={"200"}
					height={"200"}
					alt={`Image showcasing ${title}`}
				/>
			</div>

			{/* Card Meta Info */}
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
