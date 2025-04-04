import { useLocation, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSession } from "./auth-client";

const authRoutes = ["/login"];
const publicRoutes = [...authRoutes];

export function AuthObserver() {
	const { data, isPending } = useSession();
	const router = useRouter();
	const location = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isPending) return;

		if (data?.user && authRoutes.includes(location.pathname)) {
			router.navigate({ to: "/" });
		}

		if (!data?.user && !publicRoutes.includes(location.pathname)) {
			router.navigate({ to: "/login" });
		}
	}, [isPending, data?.user, location.pathname]);

	return <></>;
}
