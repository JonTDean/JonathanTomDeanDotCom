import React from "react";

type WrapperProps = {
	children: JSX.Element;
};

const Wrapper = ({ children }: WrapperProps) => {
	return <div className="h-full w-full p-[3rem]">{children}</div>;
};

export default Wrapper;
