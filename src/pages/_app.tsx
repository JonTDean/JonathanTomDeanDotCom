import type { AppProps } from "next/app";
import "/styles/globals.css";
import Navbar from "../lib/Navbar/Navbar";
import Footer from "../lib/Footer/Footer";
import Wrapper from "../components/Wrapper";

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
