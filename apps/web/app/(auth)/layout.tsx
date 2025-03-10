import { useSession } from "@/lib/auth-client";

export default function AuthLayout({
	children,
}: { children: React.ReactNode }) {
	const { isPending, error } = useSession();

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return children;
}
