import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { account, session, user, verification } from "./schema/auth-schema";
export const db = drizzle({
	connection: {
		connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
		// ssl: true
	},
	schema: {
		user,
		session,
		account,
		verification,
	},
});
