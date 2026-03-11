import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./style.sass";

import ic_arrow from "@/assets/images/ic-arrow.png";
import ic_close from "@/assets/images/ic-close.png";

const Projects = () => {
	const [projectsData, setProjectsData] = useState([]);
	const { id } = useParams(); // 抓取網址上的 id
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				// 透過 Vite 的資源路徑解析，載入靜態 JSON
				const url = new URL("../../assets/json/projectsData.json", import.meta.url);
				const response = await axios.get(url.href);
				setProjectsData(response.data);
			} catch (error) {
				console.error("Failed to load projects data:", error);
			}
		};

		fetchProjects();
	}, []);

	const selectedProject = projectsData.find(p => p.id === parseInt(id));

	return (
		<div className="projects page page-shell">
			<div className="page-container pt-13">
				<h1 className="relative text-2xl md:text-4xl text-theme-red font-bold px-7 pb-2 md:px-10">Projects</h1>
				<div className="scroll-box h-[90%] px-6 pb-14 pt-10 md:px-10 md:pb-18 box-border overflow-y-scroll scrollbar-hidden">
					<div className="projects-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
						{/* project list */}
						{projectsData.map(project => (
							<div key={project.id} className="item relative w-full min-h-[300px] box-border rounded-sm shadow-xl overflow-hidden" onClick={() => navigate(`/projects/${project.id}`)}>
								<div className="banner">
									<img src={project.banner} />
								</div>
								<div className="txt-box p-5 pb-20 relative">
									{project.side_project && <h3 className="text-sm text-white px-2.5 py-1 absolute top-0 -translate-y-full right-0 z-1 bg-theme-blue">Side Project</h3>}
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
				{/* Lightbox：if URL has id */}
				{selectedProject && (
					<div className="project-box fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-999">
						<div className="relative lightbox-container w-[89%] xl:w-full h-[90%] pt-13 pb-12 px-6 md:pt-13 md:px-13">
							<div className="title-box flex justify-between absolute top-0 left-0 w-full pl-6 pr-5 md:px-12 pt-10">
								<h2 className="text-2xl md:text-3xl text-theme-red font-bold">{selectedProject.title}</h2>
								<button className="size-10 md:hover:scale-105 md:hover:duration-100 duration-100 cursor-pointer -translate-y-1" onClick={() => navigate("/projects")}>
									<div className="img">
										<img src={ic_close} alt="" />
									</div>
								</button>
							</div>
							<div className="scroll-box h-[90%] mt-10 pt-10 box-border overflow-y-scroll scrollbar-hidden">
								<p className="text-sm text-font-black text-justify mb-8 pt-2">{selectedProject.overview}</p>
								<div className="info-box grid grid-cols-1 gap-5 mb-20 pb-8 text-font-black border-b">
									<div className="flex gap-4 md:gap-2 items-center">
										<h3 className="text-sm font-bold w-[40%] md:w-[18%] shrink-0">Role</h3>
										<p className="text-sm">{selectedProject.role}</p>
									</div>
									<div className="flex gap-4 md:gap-2 items-center">
										<h3 className="text-sm font-bold w-[40%] md:w-[18%] shrink-0">Link</h3>
										{selectedProject.links && (
											<div className="link-box text-sm flex flex-wrap gap-2">
												{selectedProject.links.demo && (
													<li className="inline">
														{selectedProject.links.demo === "-" ? (
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
											{selectedProject.tech.map(tech => (
												<span key={tech} className=" text-white bg-theme-blue py-1 px-3 rounded-full">
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
								{selectedProject.achievements && (
									<div className="achievements-box text-font-black mb-6">
										<h3 className="text-2xl font-bold">Technical Achievements</h3>
										<ul className="text-sm leading-normal divide-y divide-font-black">
											{Array.isArray(selectedProject.achievements) ? (
												selectedProject.achievements.map((item, idx) => {
													const key = Object.keys(item)[0];
													const value = item[key];
													return (
														<li key={idx} className="flex gap-4 md:gap-2 py-8">
															<p className="w-[40%] md:w-[30%] shrink-0 font-bold">{key}</p>
															<p>{value}</p>
														</li>
													);
												})
											) : (
												<li>{selectedProject.achievements}</li>
											)}
										</ul>
									</div>
								)}
								{selectedProject.impact && (
									<div className="impact-box text-font-blue mb-4">
										<h3 className="text-2xl font-bold">Impact</h3>
										<ul className="text-sm leading-normal divide-y divide-font-blue">
											{Array.isArray(selectedProject.impact) ? (
												selectedProject.impact.map((item, idx) => {
													const key = Object.keys(item)[0];
													const value = item[key];
													return (
														<li key={idx} className="flex gap-4 md:gap-2 py-8">
															<p className="w-[40%] md:w-[30%] shrink-0 font-bold">{key}</p>
															<p>{value}</p>
														</li>
													);
												})
											) : (
												<li>{selectedProject.impact}</li>
											)}
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Projects;
