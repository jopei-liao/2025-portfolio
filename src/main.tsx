import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
import { ApolloProvider } from "@apollo/client/react";

import "@/assets/sass/_layout.sass";
import "@/assets/css/index.css";

const httpLink = new HttpLink({
	uri: import.meta.env.VITE_GRAPHQL_URI,
});

// Initialize the Apollo Client instance with the HTTP link and an in-memory cache
const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

const root = document.getElementById("root");
if (!root) {
	throw new Error("Root element not found");
}

createRoot(root).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</StrictMode>,
);
