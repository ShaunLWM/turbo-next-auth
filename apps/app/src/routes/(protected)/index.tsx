import { requireAuth, useSession } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/")({
	component: RouteComponent,
	beforeLoad: requireAuth(),
});

function RouteComponent() {
	const { data } = useSession();
	return <div>Hello {data?.user?.name}!</div>;
}
