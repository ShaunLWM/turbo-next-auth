/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly BETTER_AUTH_SECRET: string;
	readonly VITE_PUBLIC_BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
