import React from "react";
import Link from "next/link";
import ProjectInfoType from "../../../../lib/Utils/types/ProjectInfo.type";

const ProjectCardLinks = ({ site, repo, blog }: ProjectInfoType) => {
	return (
		<div className="flex flex-row w-[15rem] space-x-[0.6rem] font-RMO text-sm text-[#E0E0E0]">
			{/* Site Link */}
			<Link href={site == undefined ? "https://www.google.com" : site} passHref>
				<a>
					<p>Site</p>
				</a>
			</Link>

			{/* BREAKER */}
			<p className="font-Karla text-[#1A1A1A]">|</p>

			{/* Repository Link */}
			<Link href={repo == undefined ? "https://www.google.com" : repo} passHref>
				<a>
					<p>Repository</p>
				</a>
			</Link>

			{/* BREAKER */}
			<p className="font-Karla text-[#1A1A1A]">|</p>

			{/* Blog link */}
			<Link href={blog == undefined ? "https://www.google.com" : blog} passHref>
				<a>
					<p>Blog</p>
				</a>
			</Link>
		</div>
	);
};

export default ProjectCardLinks;
