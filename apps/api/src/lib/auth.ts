import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/config";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	trustedOrigins: process.env.BETTER_AUTH_TRUSTED_ORIGINS?.split(",") ?? [],
	socialProviders: {
		github: {
			clientId: process.env.BETTER_AUTH_GITHUB_ID as string,
			clientSecret: process.env.BETTER_AUTH_GITHUB_SECRET as string,
		},
	},
});
