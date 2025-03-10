import "dotenv/config";

import { serve } from "@hono/node-server";
import type { HonoBaseVariables } from "@lib/types";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { auth } from "./lib/auth";

const SERVER_PORT = process.env.SERVER_PORT ?? 8787;

const app = new Hono<HonoBaseVariables>();

app.use(logger());
app.use("*", async (c, next) => {
	const session = await auth.api.getSession({ headers: c.req.raw.headers });

	if (!session) {
		c.set("user", null);
		c.set("session", null);
		return next();
	}

	c.set("user", session.user);
	c.set("session", session.session);
	return next();
});

app.use(
	"/api/auth/*",
	cors({
		origin: process.env.BETTER_AUTH_TRUSTED_ORIGINS?.split(",") ?? [],
		allowHeaders: ["Content-Type", "Authorization"],
		allowMethods: ["POST", "GET", "OPTIONS"],
		exposeHeaders: ["Content-Length"],
		maxAge: 600,
		credentials: true,
	}),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => {
	return auth.handler(c.req.raw);
});

app.get("/", (c) => c.text("Hello Node.js!"));

serve({
	fetch: app.fetch,
	port: Number(SERVER_PORT),
});

console.log(`Server is running on port ${SERVER_PORT}`);
