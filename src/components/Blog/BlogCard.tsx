import Image from "next/image";
import React from "react";
import Blogs from "./Blogs";

const BlogCard = () => {
	return (
		<div>
			<ul className="flex flex-col items-center space-y-6">
				{Blogs.map((blog, idx: number) => {
					return (
						<li
							key={`${blog.title}_${idx}`}
							className="flex flex-row max-w-[40rem] py-[3rem] px-9 align-center justify-center "
						>
							<div className="pr-9">
								<div className="flex flex-col">
									<h1 className="font-RMO text-xl">{blog.title}</h1>
									<ul className="flex flex-row items-center space-x-1">
										<li className="font-light font-Karla text-xs">
											{blog.analytics.date.toLocaleDateString()}
										</li>
										<p>-</p>
										<li className="font-light font-Karla text-xs">
											{blog.analytics.readTime.getMinutes()} Minutes
										</li>
										<p>-</p>
										<li className="font-light font-Karla text-xs">
											{blog.analytics.views} Views
										</li>
									</ul>
								</div>
								<div className="flex flex-col items-start pt-3 space-y-6 max-w-[20rem]">
									<p className="font-Karla text-sm">{blog.description}</p>
									<button className="bg-red-600 p-[0.6rem] font-RMO text-white text-sm">
										Read More
									</button>
								</div>
							</div>
							<div>
								<Image
									src={blog.image}
									alt={`Blog Image for ${blog.title}`}
									height={200}
									width={250}
								/>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BlogCard;
