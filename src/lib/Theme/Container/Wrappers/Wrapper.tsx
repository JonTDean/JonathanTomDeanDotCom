import React from "react";

type SpacingWrapperProps = {
	children: JSX.Element;
};

const SpacingWrapper = ({ children }: SpacingWrapperProps) => {
	return <div className="h-full w-full p-[3rem]">{children}</div>;
};

export default SpacingWrapper;
