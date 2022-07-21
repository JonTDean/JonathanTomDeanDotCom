// NextJS
import React from "react";
import Image from "next/image";

type ProjectCardImagePropsType = {
	image: string;
	title: string;
};

const ProjectCardImage = ({ image, title }: ProjectCardImagePropsType) => {
	return (
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
	);
};

export default ProjectCardImage;
