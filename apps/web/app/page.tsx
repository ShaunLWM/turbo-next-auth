"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
	const onLoginPress = () => {
		authClient.signIn.social({
			provider: "github",
			callbackURL: "/",
		});
	};

	return (
		<div className="flex items-center justify-center min-h-svh">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-2xl font-bold">Hello World</h1>
				<Button size="sm" onClick={onLoginPress}>
					Login with Github
				</Button>
			</div>
		</div>
	);
}
