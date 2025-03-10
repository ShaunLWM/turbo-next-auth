import { createAuthClient } from "better-auth/react";

export type AuthClient = ReturnType<typeof createAuthClient>;

export const authClient = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
}) as AuthClient;

export const useSession = () => authClient.useSession();
