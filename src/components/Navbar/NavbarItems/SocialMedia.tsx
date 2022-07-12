import React from "react";
import LinkedInSVG from "./SocialMedia/LinkedIn.SVG";
import GithubSVG from "./SocialMedia/Github.SVG";
import MediumSVG from "./SocialMedia/Medium.SVG";
import TwitterSVG from "./SocialMedia/Twitter.SVG";

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
			<li>
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
