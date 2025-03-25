import type { RouteContext } from "@/types";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	Link,
	Navigate,
	Outlet,
	createRootRouteWithContext,
	useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useSession } from "../lib/auth-client";

export const Route = createRootRouteWithContext<RouteContext>()({
	component: RootComponent,
	notFoundComponent: () => {
		return (
			<div>
				<p>This is the notFoundComponent configured on root route</p>
				<Link to="/">Start Over</Link>
			</div>
		);
	},
});

function RootComponent() {
	const { isPending, data } = useSession();
	const location = useLocation();

	if (isPending && !data) {
		return (
			<div className="flex items-center justify-center min-h-svh">
				<div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent" />
			</div>
		);
	}

	if (!isPending && !data && location.pathname !== "/login") {
		return <Navigate to="/login" />;
	}

	return (
		<>
			<Outlet />
			<ReactQueryDevtools buttonPosition="bottom-left" />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
