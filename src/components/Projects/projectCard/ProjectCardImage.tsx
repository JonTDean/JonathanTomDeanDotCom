// NextJS
import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardImagePropsType = {
	image: string;
	title: string;
};

// Need this for the images otherwise they don't load
const projectCardImageLoader = ({ src }: { src: string }) =>
	src == undefined ? "https://source.unsplash.com/random/200x200" : src;

// ProjectCardImage is a component that displays the image and reference link.
const ProjectCardImage = ({ image, title }: ProjectCardImagePropsType) => {
	return (
		<div className="flex flex-col items-center px-3 space-y-6">
			<Image
				loader={projectCardImageLoader}
				src={image}
				className="rounded-[20px]"
				width={"175"}
				height={"175"}
				alt={`Image showcasing ${title}`}
			/>
			<div className="pb-3 border-b-[0.09rem] border-[#1A1A1A]">
				<Link href={`projects/${title}`}>
					<h1 className="font-RMO text-[#E0E0E0]">Learn More</h1>
				</Link>
			</div>
		</div>
	);
};

export default ProjectCardImage;
