import { Link, useLocation } from "react-router-dom";

import "./style.sass";

const Nav = () => {
	const location = useLocation();

	return (
		<div className="nav fixed top-4 right-6 lg:right-8 z-999">
			<div className="container text-transparent font-bold">
				{location.pathname !== "/" ? (
					<Link className="home block size-10 rounded-[50%] shadow-xl" to="/">
						HOME
					</Link>
				) : (
					<Link className="projects block size-10 rounded-[50%] shadow-xl" to="/projects">
						PROJECTS
					</Link>
				)}
			</div>
		</div>
	);
};

export default Nav;
