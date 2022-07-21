// NextJS
import type { AppProps } from "next/app";
// Components
import "/styles/globals.css";
import Navbar from "../components/General/Navbar/Navbar";
import Footer from "../components/General/Footer/Footer";
import Wrapper from "../components/General/Wrapper";
// Backend API
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:8000/graphql",
	cache: new InMemoryCache(),
	connectToDevTools: true,
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* Providers */}
			<ApolloProvider client={client}>
				{/* Top Layer */}
				{/* Site Section */}
				<>
					<Navbar />
					<Wrapper>
						<Component {...pageProps} />
					</Wrapper>
					<Footer />
				</>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
