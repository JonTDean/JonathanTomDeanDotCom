import React from "react";
// Components
import Contracts from "./Contracts/Contracts";
import Grabber from "./Grabber/Grabber";
import Header from "./Header/Header";

const CTA = () => {
	return (
		<>
			<Header />
			<Grabber />
			<Contracts />
		</>
	);
};

export default CTA;
