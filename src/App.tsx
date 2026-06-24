import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef, createContext, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import axios from "axios";

import Home from "@/pages/Home";
import Projects from "@/pages/Projects";

import Loading from "@/components/Loading";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectLightbox from "@/components/ProjectLightbox";

interface LoadingContextType {
	setIsLoading: (loading: boolean) => void;
}
// Create the Context with an initial value of undefined
export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Custom hook to easily consume the LoadingContext with a safety check
export const useLoading = () => {
	const context = useContext(LoadingContext);
	if (!context) throw new Error("useLoading must be used within a LoadingProvider");
	return context;
};

function App() {
	const [isLoading, setIsLoading] = useState(true);

	// Ref used for the CSSTransition component to avoid findDOMNode deprecation warnings
	const loadingRef = useRef(null);

	// Fix mobile viewport height issues (the "100vh" address bar bug on iOS/Android)
	useEffect(() => {
		const setVh = () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};
		setVh();
		window.addEventListener("resize", setVh);
		return () => {
			window.removeEventListener("resize", setVh);
		};
	}, []);

	// Send basic visit analytics to Google Sheets only in production mode
	useEffect(() => {
		const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_API_URL;
		let params = {
			time: new Date().toLocaleString(),
			timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		};
		if (import.meta.env.MODE === "production" && sheetUrl) {
			axios.get(sheetUrl, { params });
		}
	}, []);

	return (
		<>
			<LoadingContext.Provider value={{ setIsLoading }}>
				<CSSTransition in={isLoading} timeout={1000} classNames="loading-fade" unmountOnExit nodeRef={loadingRef}>
					<Loading ref={loadingRef} />
				</CSSTransition>
				<BrowserRouter>
					{/* Render Nav and Footer only after the loading screen finishes */}
					{!isLoading && <Nav />}
					{!isLoading && <Footer />}

					{/* App Routing Configuration */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />}>
							<Route path=":slug" element={<ProjectLightbox />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</LoadingContext.Provider>
		</>
	);
}

export default App;
