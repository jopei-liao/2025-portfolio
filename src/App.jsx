import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

import Loading from "./components/Loading";
import Nav from "./components/Nav";

function App() {
	const [isLoading, setIsLoading] = useState(true);

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
			<AnimatePresence>
				{isLoading && (
					<motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} className="fixed inset-0 bg-white">
						<Loading />
					</motion.div>
				)}
			</AnimatePresence>
			<BrowserRouter>
				{/* nav bar*/}
				{!isLoading && <Nav />}

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
