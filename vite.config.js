import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [
		react(),
		basicSsl(), // Enable HTTPS
		tailwindcss(),
	],
	server: {
		https: true,
		host: "0.0.0.0",
		port: 5173,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	css: {
		devSourcemap: true,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/tests/setup.js"],
	},
	base: "/",
});
