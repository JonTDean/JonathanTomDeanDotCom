import React from "react";
import ProjectCardList from "../components/Projects/ProjectCardList";

const projects = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col items-center space-y-6 mb-[3rem]">
				<h1 className="font-RMO text-2xl">Current Projects</h1>
				<p className="break-words w-[40%] text-center">
					Below is a collection of my finished works, in addition there are
					notes, workflows, and more to help others if they so happen to find
					this page.
				</p>
			</div>
			<ProjectCardList />
		</div>
	);
};

export default projects;
