import React from "react";

interface ICenterWrapperProps {
	children: JSX.Element | JSX.Element[];
}

const CenterWrapper = ({ children }: ICenterWrapperProps) => (
	<div className="flex flex-col items-center">{children}</div>
);

export default CenterWrapper;
