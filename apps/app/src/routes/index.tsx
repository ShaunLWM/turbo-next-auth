import { signOut, useSession } from "@/lib/auth-client";
import { Link, Navigate, createFileRoute } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";

export const Route = createFileRoute("/")({
	component: Index,
	// loader: async ({ context }) => {
	// 	return {
	// 		isAuthPending: context.isAuthPending,
	// 		auth: context.auth,
	// 	};
	// },
	// beforeLoad: ({ context }) => {
	// 	if (!context.auth && !context.isAuthPending) {
	// 		console.log("User not authenticated, redirecting to login");
	// 		throw redirect({ to: "/login" });
	// 	}
	// },
});

function Index() {
	const { data: session, isPending } = useSession();

	if (!session && !isPending) {
		return <Navigate to="/login" />;
	}

	if (isPending) {
		return (
			<div className="flex items-center justify-center min-h-svh">
				<div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent" />
			</div>
		);
	}

	return (
		<div className="p-2">
			<div className="flex flex-col items-center justify-center min-h-svh">
				<span>Welcome {session?.user?.name}</span>
				<Link to="/dashboard">Dashboard</Link>
				<Button onClick={() => signOut()}>Sign Out</Button>
			</div>
		</div>
	);
}
