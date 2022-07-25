// NextJS
import type { AppProps } from "next/app";
// Components
import "/styles/globals.css";
import Navbar from "../components/General/Navbar/Navbar";
import Footer from "../components/General/Footer/Footer";
import Wrapper from "../lib/Theme/Container/Wrapper";
// Backend API
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/GraphQL/apolloClient";
import CenterWrapper from "../lib/Theme/Container/CenterWrapper";
import AppWrapper from "../lib/Theme/Container/Wrappers/AppWrapper";

// const client = new ApolloClient({
// 	uri: "http://localhost:8000/graphql",
// 	cache: new InMemoryCache(),
// 	connectToDevTools: true,
// });

function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps);

	return (
		<>
			{/* Providers */}
			<ApolloProvider client={apolloClient}>
				<>
					{/* Top Layer */}
					<Navbar />
					{/* Site Section */}
					<AppWrapper>
						<Component {...pageProps} />
					</AppWrapper>
					<Footer />
				</>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
