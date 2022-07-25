import React, { useState } from "react";
import StyledHeader from "../../../lib/Theme/Fonts/StyledHeader";

const Header = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [ headerTextList ] = useState<string[]>([
		"Software Engineer",
		"Jonathan Thomas Dean",
		"Based in NYC",
	]);

	return (
		<div className="flex flex-col text-center font-RMO text-3xl space-y-3">
			{headerTextList.map((headerText: string, idx: number) => (
				<StyledHeader key={idx} headerText={headerText} />
			))}
		</div>
	);
};

export default Header;
