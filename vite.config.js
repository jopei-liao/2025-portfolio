import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

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
});
