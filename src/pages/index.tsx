import type { NextPage } from "next";
import CTA from "../components/Landing/CTA";
import CenterWrapper from "../lib/Theme/Container/CenterWrapper";

const Home: NextPage = () => {
	return (
		<CenterWrapper>
			<CTA />
		</CenterWrapper>
	);
};

export default Home;
