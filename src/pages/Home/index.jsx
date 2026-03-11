import "./style.sass";
import Scroll from "../../components/Scroll";

import ic_cv from "../../assets/images/ic-cv.png";
import ic_linkedin from "../../assets/images/ic-linkedin.png";
import ic_github from "../../assets/images/ic-github.png";
import ic_behance from "../../assets/images/ic-behance.png";
import ic_email from "../../assets/images/ic-email.png";

const Home = () => {
	return (
		<div className="home page page-shell">
			<div className="page-container p-4">
				<div className="relative scroll-box h-full overflow-y-scroll scrollbar-hidden">
					<div className="intro-box h-full flex flex-col justify-center align-center py-0 px-4 md:px-6 lg:px-20 text-theme-red font-bold leading-tight">
						<h1 className="text-5xl mb-12 leading-normal">
							Hi,
							<br /> I'm Jopei
						</h1>
						<h2 className="text-lg md:text-2xl mb-18">
							A curious <span className="text-theme-blue">Front-end Engineer</span> with 5 years of experience
						</h2>
						<h3 className="text-lg md:text-2xl text-left lg:text-right">Nice to meet you!</h3>
						<Scroll />
					</div>
					<div className="info-box h-full flex flex-col justify-center align-center pt-50 px-4 md:px-6 lg:px-20 text-theme-red font-bold leading-tight">
						<h2 className="text-lg md:text-2xl mb-18 text-center">About Me</h2>
						<p className="mb-25 leading-normal">
							I am proficient in React and Vue.js, specializing in building high-performance SPAs and immersive interactive experiences. My expertise lies in bridging the divide between
							complex backend logic and pixel-perfect UI/UX designs, utilizing Figma to ensure seamless integration.
						</p>
						<h2 className="text-lg md:text-2xl mb-18 text-center">Tech Stack</h2>
						<ul className="flex flex-wrap justify-center items-center gap-4">
							<li className="stack-item">React</li>
							<li className="stack-item">Redux</li>
							<li className="stack-item">Vue</li>
							<li className="stack-item">Vite</li>
							<li className="stack-item">JavaScript</li>
							<li className="stack-item">HTML5</li>
							<li className="stack-item">CSS3 / SASS</li>
							<li className="stack-item">TailwindCSS</li>
							<li className="stack-item">Git</li>
							<li className="stack-item">RESTful API</li>
						</ul>
					</div>
					<div className="social-box h-full flex flex-col justify-center align-center py-0 px-4 md:px-6 lg:px-20 text-theme-red font-bold leading-tight">
						<h2 className="text-lg md:text-2xl mb-18 text-center">Find me on</h2>
						<ul className="flex flex-col justify-center items-center">
							<li className="">
								<a
									className="block size-9.5 md:hover:scale-110 md:hover:duration-300 duration-300"
									href="https://drive.google.com/file/d/13TBDCyRM_vy8e0wKuRwXF1Vt5mCaFEgQ/view?usp=drive_link"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="img">
										<img src={ic_cv} alt="LinkedIn" />
									</div>
									<span className="text-[0em] none">LinkedIn</span>
								</a>
							</li>
							<li className="my-3">
								<a
									className="block size-7 md:hover:scale-110 md:hover:duration-300 duration-300"
									href="https://www.linkedin.com/in/jopei-front-end-engineer/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="img">
										<img src={ic_linkedin} alt="LinkedIn" />
									</div>
									<span className="text-[0em] none">LinkedIn</span>
								</a>
							</li>
							<li className="my-1">
								<a className="block size-7 md:hover:scale-110 md:hover:duration-300 duration-300" href="https://github.com/jopei-liao" target="_blank" rel="noopener noreferrer">
									<div className="img">
										<img src={ic_github} alt="GitHub" />
									</div>
									<span className="text-[0em] none">GitHub</span>
								</a>
							</li>
							<li className="my-3">
								<a className="block size-7 md:hover:scale-110 md:hover:duration-300 duration-300" href="https://www.behance.net/jopei-liao" target="_blank" rel="noopener noreferrer">
									<div className="img">
										<img src={ic_behance} alt="GitHub" />
									</div>
									<span className="text-[0em] none">GitHub</span>
								</a>
							</li>
							<li>
								<a className="block size-8.5 md:hover:scale-110 md:hover:duration-300 duration-300" href="mailto:jopei.liao@gmail.com" target="_blank" rel="noopener noreferrer">
									<div className="img">
										<img src={ic_email} alt="Email" />
									</div>
									<span className="text-[0em] none">Email</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
