import * as React from "react";
import { SVGProps } from "react";

const LinkedInSVG = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="1em"
			height="1em"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12.78 12.783h-2.222V9.302c0-.83-.017-1.898-1.157-1.898-1.159 0-1.335.903-1.335 1.837v3.542H5.844V5.625h2.134v.976h.029c.298-.563 1.023-1.157 2.106-1.157 2.25 0 2.667 1.482 2.667 3.41v3.929ZM3.335 4.646c-.715 0-1.29-.58-1.29-1.291a1.288 1.288 0 1 1 2.58 0c0 .712-.579 1.29-1.29 1.29Zm1.113 8.137H2.222V5.625h2.227v7.158ZM13.891 0H1.107C.495 0 0 .484 0 1.08v12.84C0 14.516.495 15 1.107 15h12.782C14.5 15 15 14.517 15 13.92V1.08C15 .485 14.5 0 13.889 0h.002Z"
				fill={props.fill ?? "#961203"}
			/>
		</svg>
	);
};

export default LinkedInSVG;
