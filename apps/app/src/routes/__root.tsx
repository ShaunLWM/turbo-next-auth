import { AuthObserver } from "@/lib/auth-observer";
import type { RouteContext } from "@/types";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	Link,
	Outlet,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

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
	return (
		<>
			<AuthObserver />
			<Outlet />
			<ReactQueryDevtools buttonPosition="bottom-left" />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
