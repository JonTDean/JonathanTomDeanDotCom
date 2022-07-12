import React from "react";
import Contracts from "./Contracts/Contracts";
import Grabber from "./Grabber/Grabber";
import Header from "./Header/Header";

const CTA = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<Header />
			<Grabber />
			<Contracts />
		</div>
	);
};

export default CTA;
