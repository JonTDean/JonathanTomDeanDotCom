import Image from "next/image";
import React from "react";

const Grabber = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="h-[280px] w-[213px] my-10 py-[0.25rem] px-[0.25rem] relative border-4 rounded-t-full border-red-900">
				<Image
					src={"/JTD.jpg"}
					className="rounded-t-full"
					alt="A picture of Jonathan T. X. L. Dean"
					width="213px"
					height="285px"
				/>
			</div>
			<div className="flex flex-col xl:flex-row max-w-[50%] xl:max-w-[75%] justify-center items-center xl:items-start xl:align-top">
				<div className="flex flex-col my-5 xl:my-0 justify-start xl:justify-center items-center xl:items-start">
					<h2 className="text-lg">Skills</h2>
					<ul className="text-sm">
						<li>Fullstack</li>
						<li>Frontend</li>
						<li>Backend</li>
						<li>Machine Learning</li>
						<li>BioInformatics</li>
						<li>Data Science</li>
						<li>Data Architecture</li>
						<li>DevOps</li>
						<li>Systems Administration</li>
						<li>Game Development</li>
						<li>Graphic Design</li>
						<li>3D Modeling</li>
					</ul>
				</div>
				<div className="flex flex-col items-center xl:items-start my-5 xl:my-0 xl:w-[50%]">
					<h2 className="text-lg">Biography</h2>
					<div>
						<p className="text-sm">
							I{"'"}m a passionate developer! I{"'"}m constantly learning and
							evolving in my craft. I love to share what I learn with others, check out my blog if you
							{"'"}re interested!
						</p>
					</div>
				</div>
				<div className="my-5 xl:my-0 justify-center md:items-center">
					<h2 className="text-lg">Statistics</h2>
					<ul className="text-sm">
						<li>
							<h3>YOE</h3>
							<p>5</p>
						</li>
						<li>
							<h3>Repositories</h3>
							<p>5</p>
						</li>
						<li>
							<h3>Contracts</h3>
							<p>10</p>
						</li>
						<li>
							<h3>Commits</h3>
							<p>5</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Grabber;
