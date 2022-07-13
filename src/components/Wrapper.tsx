import React from "react";

type WrapperProps = {
	children: JSX.Element;
};

const Wrapper = ({ children }: WrapperProps) => {
	return (
		<div className="bg-[#FFEAC5] h-full w-full">
			{children}
		</div>
	);
};

export default Wrapper;
