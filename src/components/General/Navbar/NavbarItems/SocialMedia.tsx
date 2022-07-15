import React from "react";
import LinkedInSVG from "../../../../lib/Icons/LinkedIn.SVG";
import GithubSVG from "../../../../lib/Icons/Github.SVG";
import MediumSVG from "../../../../lib/Icons/Medium.SVG";
import TwitterSVG from "../../../../lib/Icons/Twitter.SVG";

const SocialMedia = () => {
	return (
		<div className="absolute xl:static invisible xl:visible flex flex-row ml-auto space-x-5 align-center">
			<li>
				<a
					href={"https://www.linkedin.com/in/jonathan-dean-ab67aa150/"}
					target="_blank"
					rel="noreferrer"
				>
					<LinkedInSVG />
				</a>
			</li>
			<li>
				<a
					href={"https://github.com/JonTDean"}
					target="_blank"
					rel="noreferrer"
				>
					<GithubSVG />
				</a>
			</li>
			<li className="flex items-center">
				<a
					href={"https://medium.com/@jonathantomdean"}
					target="_blank"
					rel="noreferrer"
				>
					<MediumSVG />
				</a>
			</li>
			<li>
				<a
					href={"https://twitter.com/JonTDean"}
					target="_blank"
					rel="noreferrer"
				>
					<TwitterSVG />
				</a>
			</li>
		</div>
	);
};

export default SocialMedia;
