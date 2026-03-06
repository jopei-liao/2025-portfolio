import { Link, useLocation } from "react-router-dom";

import "./style.sass";

const Nav = () => {
	const location = useLocation();

	return (
		<div className="nav fixed md:right-[1.25em] right-[1.5em] md:top-[1.5em] top-[1em] z-999">
			<div className="container text-transparent font-bold">
				{location.pathname !== "/" ? (
					<Link className="home block w-[2.5em] h-[2.5em] rounded-[50%] shadow-xl" to="/">
						HOME
					</Link>
				) : (
					<Link className="projects block w-[2.5em] h-[2.5em] rounded-[50%] shadow-xl" to="/projects">
						PROJECTS
					</Link>
				)}
			</div>
		</div>
	);
};

export default Nav;
