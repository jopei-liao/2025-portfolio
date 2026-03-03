import { Link } from "react-router-dom";

import "./style.sass";

const Nav = () => {
	return (
		<div className="nav fixed w-full flex justify-center pt-1 z-999">
			<div className="container flex items-center justify-center gap-2">
				<Link to="/">HOME</Link>
				<Link to="/projects">PROJECTS</Link>
			</div>
		</div>
	);
};

export default Nav;
