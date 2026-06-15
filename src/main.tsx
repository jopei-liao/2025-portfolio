import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";

import "@/assets/sass/_layout.sass";
import "@/assets/css/index.css";

const root = document.getElementById("root");
if (!root) {
	throw new Error("Root element not found");
}

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
