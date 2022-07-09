import Image from "next/image";
import React from "react";

const Grabber = () => {
	return (
		<div className=" h-[285px] w-[213px] my-10 relative rounded-t-full border-3 border-red-900">
			<Image
				src={"/JTD.jpg"}
				className="rounded-t-full border-4 border-red-900"
				alt="A picture of Jonathan Dean"
				width="213px"
				height="285px"
				layout="fill"
				// objectFit="cover"
			/>
		</div>
	);
};

export default Grabber;
