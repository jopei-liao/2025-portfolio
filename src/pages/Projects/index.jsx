import { useParams, useNavigate } from "react-router-dom";

import "./style.sass";

const projectsData = [
	{ id: 1, title: "專案 A", description: "這是詳細介紹 A...", tech: "React, Tailwind" },
	{ id: 2, title: "專案 B", description: "這是詳細介紹 B...", tech: "Node.js, Sass" },
];

const Projects = () => {
	const { id } = useParams(); // 抓取網址上的 id
	const navigate = useNavigate();
	const selectedProject = projectsData.find(p => p.id === parseInt(id));

	return (
		<div className="project page">
			<div className="container">
				<h1>Projects</h1>
				<div className="p-8">
					{/* project list */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{projectsData.map(project => (
							<div
								key={project.id}
								className="p-4 border rounded-xl cursor-pointer"
								onClick={() => navigate(`/projects/${project.id}`)} // 點擊後改變路由
							>
								<h2>{project.title}</h2>
							</div>
						))}
					</div>

					{/* Lightbox：if URL has id */}
					{selectedProject && (
						<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
							<div className="bg-white p-8 rounded-2xl w-full max-w-lg relative">
								<button
									className="absolute top-2 right-4 text-2xl"
									onClick={() => navigate("/projects")} // when close, go back to /projects
								>
									×
								</button>
								<h2 className="text-2xl font-bold">{selectedProject.title}</h2>
								<p>{selectedProject.description}</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Projects;
