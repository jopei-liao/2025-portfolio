import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

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

	// 設定 vh 變數
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
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
