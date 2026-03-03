import "./style.sass";

const Loading = () => {
	return (
		<div className="loading fixed h-dvh w-full z-9999">
			<div className="container h-full w-full">
				<div className="loading-text flex items-center justify-center">
					<span className="loading-text-words">L</span>
					<span className="loading-text-words">O</span>
					<span className="loading-text-words">A</span>
					<span className="loading-text-words">D</span>
					<span className="loading-text-words">I</span>
					<span className="loading-text-words">N</span>
					<span className="loading-text-words">G</span>
				</div>
			</div>
		</div>
	);
};

export default Loading;
