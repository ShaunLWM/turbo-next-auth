import { scan } from "react-scan";
import "@workspace/ui/globals.css";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSession } from "./lib/auth-client";
import { Providers } from "./lib/providers";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

scan({
	enabled: process.env.NODE_ENV !== "production",
});

const router = createRouter({
	routeTree,
	context: {
		queryClient,
		auth: null,
	},
	defaultPreload: "intent",
	// Since we're using React Query, we don't want loader calls to ever be stale
	// This will ensure that the loader is always called when the route is preloaded or visited
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function App() {
	const auth = useSession();
	return <RouterProvider router={router} context={{ auth }} />;
}

const rootElement = document.getElementById("root");
if (!rootElement?.innerHTML && rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<Providers>
					<App />
				</Providers>
			</QueryClientProvider>
		</StrictMode>,
	);
}
