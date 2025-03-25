import type { RouteContext } from "@/types";
import { type ParsedLocation, redirect } from "@tanstack/react-router";
import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
	baseURL: import.meta.env.VITE_PUBLIC_BASE_URL,
});

export const { signIn, signUp, signOut, useSession } = authClient;

export type RouteGuardOptions = {
	redirectUrl?: string;
	context: RouteContext;
	location: ParsedLocation;
};

export const requireAuth = () => {
	return ({ context, location }: Omit<RouteGuardOptions, "redirectUrl">) => {
		if (!context.auth?.isPending && !context.auth?.data) {
			throw redirect({ to: "/login", search: { redirect: location.href } });
		}
	};
};
