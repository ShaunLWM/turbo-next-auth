import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";

async function runMigration() {
	console.log("Migration started ⌛");
	const db = drizzle({
		connection: {
			connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
		},
	});

	try {
		await migrate(db, { migrationsFolder: "./.drizzle/migrations" });
		console.log("Migration completed ✅");
	} catch (error) {
		console.error("Migration failed 🚨:", error);
	}
}

runMigration().catch((error) =>
	console.error("Error in migration process 🚨:", error),
);
