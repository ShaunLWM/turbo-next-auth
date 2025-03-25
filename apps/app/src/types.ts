import type { QueryClient } from "@tanstack/react-query";
import type { useSession } from "./lib/auth-client";

export type RouteContext = {
	queryClient: QueryClient;
	auth: ReturnType<typeof useSession> | null;
};
