import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCardProps from "../../../lib/types/ProjectCard.props";

// ProjectCard is a component that displays a single project.
const ProjectCard = ({ title, description, info, image }: ProjectCardProps) => {
	return (
		<div className="flex flex-row m-3 p-3 items-center bg-[#4718FF] rounded-[21px]">
			{/* Image for the Card */}
			<div className="flex flex-col items-center px-3 space-y-6">
				<Image
					src={image}
					className="rounded-[20px]"
					width={"175"}
					height={"175"}
					alt={`Image showcasing ${title}`}
				/>
				<div className="pb-3 border-b-[0.09rem] border-[#1A1A1A]">
					<h1 className="font-RMO text-[#E0E0E0]">Learn More</h1>
				</div>
			</div>

			{/* Card Meta Info */}
			<div className="flex flex-col items-center py-6 px-6 justify-around space-y-5">
				{/* Title Header */}
				<div className="pb-3 border-b-[0.09rem] border-[#1A1A1A]">
					<h1 className="font-RMO text-[#DE4B51]">{title}</h1>
				</div>
				{/* Description Area */}
				<div className="break-words w-[15rem] py-3">
					{/* <u className="text-[#1A1A1A]">
						<h2 className="font-RMO text-[#1A1A1A]">Description</h2>
					</u> */}
					<p className="font-Karla text-[#E0E0E0] h-[9rem] overflow-y-auto">
						{description}
					</p>
				</div>

				{/* Information on how to interact with the program */}
				<div className="flex flex-row w-[15rem] space-x-[0.6rem] font-RMO text-sm text-[#E0E0E0]">
					{/* Site Link */}
					<Link href={info.site} passHref>
						<a>
							<p>Site</p>
						</a>
					</Link>

					{/* BREAKER */}
					<p className="font-Karla text-[#1A1A1A]">|</p>

					{/* Repository Link */}
					<Link href={info.repo} passHref>
						<a>
							<p>Repository</p>
						</a>
					</Link>

					{/* BREAKER */}
					<p className="font-Karla text-[#1A1A1A]">|</p>

					{/* Blog link */}
					<Link href={info.blog} passHref>
						<a>
							<p>Blog</p>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
