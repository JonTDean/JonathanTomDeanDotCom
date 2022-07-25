import React from "react";

interface IStyledHeaderProps {
	headerText: string;
}
const StyledHeader = ({ headerText }: IStyledHeaderProps) => (
	<h1 className="">{headerText}</h1>
);

export default StyledHeader;
