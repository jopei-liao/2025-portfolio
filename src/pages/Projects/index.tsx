import { useNavigate, Outlet } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_PROJECTS } from "@/graphql/projectQueries";
import type { QueryData } from "@/tests/utils/projectUtils";
import { useLoading } from "@/App";

import "./style.sass";
import ic_arrow from "@/assets/images/ic-arrow.png";
import { useEffect } from "react";

const Projects = () => {
	const navigate = useNavigate();

	// Fetch all projects data from Apollo Client
	const { loading, error, data } = useQuery(GET_PROJECTS);

	// Get the global loading setter from custom context hook
	const { setIsLoading } = useLoading();

	useEffect(() => {
		if (loading) {
			setIsLoading(true);
			return;
		}

		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, [loading, setIsLoading]);

	if (error) return <div>載入失敗：{error.message}</div>;

	// Prevent rendering the main content while Apollo is still loading the data
	if (loading) return null;

	const projectsData = (data as QueryData)?.projects || [];

	return (
		<div className="projects page page-shell">
			<div className="page-container pt-10 md:pt-13">
				<h1 className="absolute left-0 top-10 md:top-13 w-full text-2xl md:text-4xl text-theme-red font-bold px-7 md:px-10 bg-white z-10 pointer-events-none">Projects</h1>
				<div className="scroll-box h-full px-6 pb-14 pt-15 md:pt-20 md:px-10 md:pb-18 box-border overflow-y-scroll scrollbar-hidden">
					<div className="projects-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
						{/* project list */}
						{projectsData.map(project => (
							<div
								key={project.slug}
								className="item relative w-full min-h-[300px] box-border rounded-xl shadow-xl overflow-hidden cursor-pointer md:hover:-translate-y-1 md:hover:duration-150 duration-150 "
								onClick={() => navigate(`/projects/${project.slug}`)}
							>
								{project.banner && (
									<div className="banner">
										<img src={`${project.banner.url || null}`} alt={`${project.title} Banner`} />
									</div>
								)}
								<div className="txt-box p-5 pb-24 relative">
									{project.sideProject && <h3 className="text-sm text-white px-2.5 py-1 absolute top-0 -translate-y-full right-0 z-1 bg-theme-blue">Side Project</h3>}
									<h2 className="text-base text-theme-red font-bold md:text-xl mb-3">{project.title}</h2>
									<p className="text-sm text-font-black">{project.subtitle}</p>
								</div>
								{project.tech && (
									<div className="w-[75%] absolute bottom-5.25 md:bottom-6.5 left-5 flex flex-wrap gap-2">
										{project.tech.map(tech => (
											<span key={tech} className="text-xs text-font-black border py-[.15em] px-3 rounded-full">
												{tech}
											</span>
										))}
									</div>
								)}
								<button className="absolute right-4 md:bottom-5 bottom-4 size-8.5 md:hover:translate-x-1 md:hover:duration-150 duration-150 cursor-pointer">
									<div className="img">
										<img src={ic_arrow} alt="" />
									</div>
								</button>
							</div>
						))}
					</div>
				</div>
				{/* Lightbox：if URL has slug */}
				<Outlet context={{ projectsData }} />
			</div>
		</div>
	);
};

export default Projects;
