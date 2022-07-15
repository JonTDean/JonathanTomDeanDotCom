import type { AppProps } from "next/app";
import "/styles/globals.css";
import Navbar from "../components/General/Navbar/Navbar";
import Footer from "../components/General/Footer/Footer";
import Wrapper from "../components/General/Wrapper";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Wrapper>
				<Component {...pageProps} />
			</Wrapper>
			<Footer />
		</>
	);
}

export default MyApp;
