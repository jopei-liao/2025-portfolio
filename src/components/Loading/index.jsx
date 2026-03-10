import { forwardRef } from "react";
import "./style.sass";

const Loading = forwardRef((props, ref) => {
	return (
		<div className="loading fixed top-0 left-0 w-full h-screen-vh bg-theme-beige z-9999" ref={ref}>
			<div className="container w-full h-full">
				<div className="loading-text flex items-center justify-center text-3xl text-theme-blue font-bold font-[Roboto_Mono]">
					<span className="mx-2">L</span>
					<span className="mx-2">O</span>
					<span className="mx-2">A</span>
					<span className="mx-2">D</span>
					<span className="mx-2">I</span>
					<span className="mx-2">N</span>
					<span className="mx-2">G</span>
				</div>
			</div>
		</div>
	);
});

export default Loading;
