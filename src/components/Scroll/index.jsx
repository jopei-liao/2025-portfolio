import "./style.sass";

const Scroll = () => {
	return (
		<div className="scroll absolute inset-x-0 bottom-0 md:bottom-[2em] mx-auto w-fit">
			<div className="mouse container"></div>
		</div>
	);
};

export default Scroll;
