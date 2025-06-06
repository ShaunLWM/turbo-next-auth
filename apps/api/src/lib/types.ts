import type { auth } from "./auth";

export type HonoBaseVariables = {
	Variables: {
		user: typeof auth.$Infer.Session.user | null;
		session: typeof auth.$Infer.Session.session | null;
	};
};
