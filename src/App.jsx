import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import axios from "axios";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const loadingRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	// vh set
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

	useEffect(() => {
		let sheetUrl = "https://script.google.com/macros/s/AKfycbz7mASCJ6AEq6QtAbEUZg2rkEGNcv6PvaIa6aC9wN77pUlWfgFLPTnjqalgJK9n3shUsA/exec";
		let params = {
			time: new Date().toLocaleString(),
			timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		};
		if (import.meta.env.MODE === "production") {
			axios.get(sheetUrl, { params });
		}
	}, []);
	return (
		<>
			<CSSTransition in={isLoading} timeout={1000} classNames="loading-fade" unmountOnExit nodeRef={loadingRef}>
				<Loading ref={loadingRef} />
			</CSSTransition>
			<BrowserRouter>
				{/* nav bar*/}
				{!isLoading && <Nav />}

				{/* footer - 保護文字 */}
				{!isLoading && <Footer />}

				{/* routes change */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/:id" element={<Projects />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
