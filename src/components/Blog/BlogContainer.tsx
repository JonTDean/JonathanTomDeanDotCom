import React from "react";
import DevToSVG from "../../lib/Icons/DevTo.svg";
import MediumSVG from "../../lib/Icons/Medium.SVG";
import BlogCardList from "./BlogCardList";

const BlogContainer = () => {
	return (
		<div className="flex flex-col py-6 space-y-6">
			<div className="flex flex-col items-center space-y-6">
				<div className="flex flex-col items-center">
					<p className="font-RMO">List of articles I{"'"}ve written.</p>
					<p className="max-w-[24rem] text-center text-sm">
						please contact me if you{"'"}d like me to write about a specific
						topic, collaborate, have a question, or just want to talk!
					</p>
				</div>
				<div className="flex flex-col space-y-3">
					<h2 className="font-RMO text-sm">
						You can also find all of my articles on...
					</h2>
					<ul className="flex flex-row justify-around">
						<li className="flex flex-row space-x-3 items-center">
							<MediumSVG />
							<p className="font-Karla text-sm">Medium</p>
						</li>
						<li className="flex flex-row space-x-3 items-center">
							<DevToSVG />
							<p className="font-Karla text-sm">Dev.To</p>
						</li>
					</ul>
				</div>
			</div>
			<BlogCardList />
		</div>
	);
};

export default BlogContainer;
