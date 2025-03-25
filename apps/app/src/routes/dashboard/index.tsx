import { requireAuth } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
	component: RouteComponent,
	beforeLoad: requireAuth(),
});

function RouteComponent() {
	return <div>Hello "/(auth)/dashboard/"!</div>;
}
