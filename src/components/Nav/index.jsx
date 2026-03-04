import { Link, useLocation } from "react-router-dom";

import "./style.sass";

const Nav = () => {
	const location = useLocation();

	return (
		<div className="nav fixed z-999">
			<div className="container">
				{location.pathname !== "/" ? (
					<Link className="btn-nav home" to="/">
						HOME
					</Link>
				) : (
					<Link className="btn-nav projects" to="/projects">
						PROJECTS
					</Link>
				)}
			</div>
		</div>
	);
};

export default Nav;
