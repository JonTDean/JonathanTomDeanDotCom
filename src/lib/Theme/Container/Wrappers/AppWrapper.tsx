import React from "react";
import CenterWrapper from "./CenterWrapper";
import Wrapper from "./Wrapper";

interface IAppWrapperProps {
	children: JSX.Element | JSX.Element[];
};

const AppWrapper = ({ children }: IAppWrapperProps) => {
	return (
		<Wrapper>
			<CenterWrapper>{children}</CenterWrapper>
		</Wrapper>
	);
};

export default AppWrapper;
