import { signIn, useSession } from "@/lib/auth-client";
import { Navigate, createFileRoute } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";
import { z } from "zod";

export const Route = createFileRoute("/(public)/login/")({
	validateSearch: z.object({
		redirect: z.string().optional().catch(""),
	}),
	component: RouteComponent,
});

function RouteComponent() {
	const search = Route.useSearch();
	const { isPending, data } = useSession();

	if (isPending && !data) {
		return <div>Loading...</div>;
	}

	if (!isPending && data) {
		return <Navigate to="/" />;
	}

	const onClick = async () => {
		console.log("signIn.social");
		await signIn.social({
			provider: "github",
			callbackURL: `http://localhost:5173${search?.redirect || ""}`,
		});

		// await router.invalidate();
	};

	return (
		<div>
			Hello "/login/"!
			<Button onClick={onClick}>Login with Github</Button>
		</div>
	);
}
