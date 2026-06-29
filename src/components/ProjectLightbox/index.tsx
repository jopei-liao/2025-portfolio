import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findProjectBySlug } from "@/tests/utils/projectUtils";
import { useQuery } from "@apollo/client/react";
import { GET_PROJECTS } from "@/graphql/projectQueries";
import type { QueryData } from "@/tests/utils/projectUtils";

import ic_close from "@/assets/images/ic-close.png";

const ProjectLightbox = () => {
	const navigate = useNavigate();
	const { slug } = useParams<{ slug: string }>();

	// Fetch all projects data using Apollo Client useQuery
	const { data } = useQuery(GET_PROJECTS);
	const selectedProject = findProjectBySlug((data as QueryData)?.projects, slug);

	useEffect(() => {
		// If there is a slug in the URL, but no corresponding project data is found
		if (slug && !selectedProject) {
			navigate("/projects", { replace: true });
		}
	}, [slug, selectedProject, navigate]);

	if (slug && !selectedProject) return null;

	return (
		<>
			<div className="project-box fixed inset-0 z-999 flex items-center justify-center">
				<div className="absolute inset-0 bg-black/50" onClick={() => navigate("/projects")} />
				<div className="relative lightbox-container w-[89%] xl:w-full h-[90%] pt-13 pb-12 px-6 md:pt-13 md:px-13">
					<div className="title-box flex justify-between absolute top-0 left-0 w-full pl-6 pr-5 md:pl-13 md:pr-12 pt-10 bg-white pointer-events-none z-10">
						<h2 className="text-2xl md:text-3xl text-theme-red font-bold">{selectedProject?.title}</h2>
						<button className="size-10 md:hover:scale-105 md:hover:duration-100 duration-100 cursor-pointer -translate-y-1 pointer-events-auto" onClick={() => navigate("/projects")}>
							<div className="img">
								<img src={ic_close} alt="" />
							</div>
						</button>
					</div>
					<div className="scroll-box h-full pt-10 md:pt-13 box-border overflow-y-scroll scrollbar-hidden">
						{selectedProject?.showPc && (
							<div className="pic mb-8">
								<img src={`${selectedProject?.showPc.url || null}`} />
							</div>
						)}
						{selectedProject?.showMo && (
							<div className="pic mb-8">
								<img src={`${selectedProject?.showMo.url || null}`} />
							</div>
						)}
						<p className="text-sm text-font-black mb-8 pt-2">{selectedProject?.overview}</p>
						<div className="info-box grid grid-cols-1 gap-5 mb-20 pb-8 text-font-black border-b">
							<div className="flex gap-4 md:gap-2 items-center">
								<h3 className="text-sm font-bold w-[40%] md:w-[18%] shrink-0">Role</h3>
								<p className="text-sm">{selectedProject?.role}</p>
							</div>
							<div className="flex gap-4 md:gap-2 items-center">
								<h3 className="text-sm font-bold w-[40%] md:w-[18%] shrink-0">Link</h3>
								{selectedProject?.links && (
									<div className="link-box text-sm flex flex-wrap gap-2">
										{selectedProject?.links.demo && (
											<li className="inline">
												{selectedProject?.links.demo === "-" ? (
													<p>-</p>
												) : (
													<a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="underline">
														Demo
													</a>
												)}
											</li>
										)}
										{selectedProject.links.github && selectedProject.links.github !== "" && (
											<li className="inline">
												<a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="underline">
													GitHub
												</a>
											</li>
										)}
									</div>
								)}
							</div>
							<div className="flex gap-4 md:gap-2 items-center">
								<h3 className="text-sm font-bold w-[40%] md:w-[18%] shrink-0">Tech Stack</h3>
								<div className="tech-box text-sm flex flex-wrap gap-2">
									{selectedProject?.tech.map(tech => (
										<span key={tech} className=" text-white bg-theme-blue py-1 px-3 rounded-full">
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
						{selectedProject?.achievements && selectedProject.achievements.length > 0 && (
							<div className="achievements-box text-font-black mb-6">
								<h3 className="text-2xl font-bold">Achievements</h3>
								<ul className="text-sm leading-normal divide-y divide-font-black">
									{selectedProject.achievements.map((item, idx) => (
										<li key={idx} className="flex gap-4 md:gap-2 py-5">
											<p className="w-[40%] md:w-[30%] shrink-0 font-bold">{item.title}</p>
											<p>{item.content}</p>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectLightbox;
