import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./style.sass";

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
				<h1 className="text-2xl md:text-4xl px-7 pb-4 md:px-10 font-bold">Projects</h1>
				<div className="scroll-box h-[90%] px-6 pb-14 md:px-10 md:pb-18 box-border overflow-y-scroll scrollbar-hidden">
					<div className="projects-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
						{/* project list */}
						{projectsData.map(project => (
							<div key={project.id} className="item w-full p-4 md:p-5 mb-6 box-border rounded-sm shadow-xl" onClick={() => navigate(`/projects/${project.id}`)}>
								<h2 className="text-base md:text-xl mb-2">{project.title}</h2>
								{project.tag && (
									<div className="flex flex-wrap gap-2">
										{project.tag.map(tag => (
											<span key={tag} className="text-sm md:text-base">
												{tag}
											</span>
										))}
									</div>
								)}
							</div>
						))}
					</div>

					{/* Lightbox：if URL has id */}
					{selectedProject && (
						<div className="project-box fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-99999">
							<div className="relative lightbox-container w-[89%] xl:w-full h-[90%] pt-13 pb-12 px-6 md:pt-13 md:px-13">
								<button
									className="size-10 absolute top-3 right-3 md:top-6 md:right-6 block text-4xl text-center"
									onClick={() => navigate("/projects")} // when close, go back to /projects
								>
									×
								</button>
								<h2 className="text-xl md:text-2xl font-bold mb-6">{selectedProject.title}</h2>
								<p className="text-sm">{selectedProject.description}</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Projects;
