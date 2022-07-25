import * as React from "react";
import { SVGProps } from "react";

const MediumSVG = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className="justify-center"
			width="1em"
			height="0.6em"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M8.463 4.5A4.25 4.25 0 0 1 4.23 8.762 4.25 4.25 0 0 1 0 4.5 4.25 4.25 0 0 1 4.231.237 4.25 4.25 0 0 1 8.463 4.5Zm4.637 0c0 2.213-.944 4.012-2.112 4.012-1.17 0-2.12-1.8-2.12-4.012 0-2.212.95-4.013 2.12-4.013 1.168 0 2.112 1.8 2.112 4.013Zm1.9 0c0 1.981-.331 3.594-.744 3.594-.412 0-.744-1.613-.744-3.594 0-1.981.332-3.594.744-3.594C14.67.906 15 2.52 15 4.5Z"
				fill={props.fill ?? "#DE4B51"}
			/>
		</svg>
	);
};

export default MediumSVG;
