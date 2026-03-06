import { forwardRef } from "react";
import "./style.sass";

const Loading = forwardRef((props, ref) => {
	return (
		<div className="loading fixed top-0 left-0 w-full h-screen-vh z-9999" ref={ref}>
			<div className="container w-full h-full">
				<div className="loading-text flex items-center justify-center text-[1.5em] font-bold font-[Roboto_Mono]">
					<span className="m-[0_.25em]">L</span>
					<span className="m-[0_.25em]">O</span>
					<span className="m-[0_.25em]">A</span>
					<span className="m-[0_.25em]">D</span>
					<span className="m-[0_.25em]">I</span>
					<span className="m-[0_.25em]">N</span>
					<span className="m-[0_.25em]">G</span>
				</div>
			</div>
		</div>
	);
});

export default Loading;
