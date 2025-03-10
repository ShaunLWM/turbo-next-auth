import { useSession } from "@/lib/auth-client";

export default function AuthPage() {
	const { data } = useSession();

	return <div>Welcome to the app {data?.user.email}</div>;
}
