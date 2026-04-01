import React from "react";
import ic_close from "@/assets/images/ic-close.png";

const ProjectLightbox = ({ project, onClose }) => {
	if (!project) return null;

	return (
		<>
			<div className="project-box fixed inset-0 z-999 flex items-center justify-center">
				<div className="absolute inset-0 bg-black/50" onClick={onClose} />
				<div className="relative lightbox-container w-[89%] xl:w-full h-[90%] pt-13 pb-12 px-6 md:pt-13 md:px-13">
					<div className="title-box flex justify-between absolute top-0 left-0 w-full pl-6 pr-5 md:pl-13 md:pr-12 pt-10 bg-white pointer-events-none z-10">
						<h2 className="text-2xl md:text-3xl text-theme-red font-bold">{project.title}</h2>
						<button className="size-10 md:hover:scale-105 md:hover:duration-100 duration-100 cursor-pointer -translate-y-1 pointer-events-auto" onClick={onClose}>
							<div className="img">
								<img src={ic_close} alt="" />
							</div>
						</button>
					</div>
					<div className="scroll-box h-full pt-10 md:pt-13 box-border overflow-y-scroll scrollbar-hidden">
						{project.show_pc !== "" && (
							<div className="pic mb-8">
								<img src={`/assets/images/projects/${project.show_pc}`} />
							</div>
						)}
						{project.show_mo !== "" && (
							<div className="pic mb-8">
								<img src={`/assets/images/projects/${project.show_mo}`} />
							</div>
						)}
						<p className="text-sm text-font-black mb-8 pt-2">{project.overview}</p>
						<div className="info-box grid grid-cols-1 gap-5 mb-20 pb-8 text-font-black border-b">
							<div className="flex gap-4 md:gap-2 items-center">
								<h3 className="text-sm font-bold w-[40%] md:w-[18%] shrink-0">Role</h3>
								<p className="text-sm">{project.role}</p>
							</div>
							<div className="flex gap-4 md:gap-2 items-center">
								<h3 className="text-sm font-bold w-[40%] md:w-[18%] shrink-0">Link</h3>
								{project.links && (
									<div className="link-box text-sm flex flex-wrap gap-2">
										{project.links.demo && (
											<li className="inline">
												{project.links.demo === "-" ? (
													<p>-</p>
												) : (
													<a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="underline">
														Demo
													</a>
												)}
											</li>
										)}
										{project.links.github && project.links.github !== "" && (
											<li className="inline">
												<a href={project.links.github} target="_blank" rel="noopener noreferrer" className="underline">
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
									{project.tech.map(tech => (
										<span key={tech} className=" text-white bg-theme-blue py-1 px-3 rounded-full">
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
						{project.achievements && (
							<div className="achievements-box text-font-black mb-6">
								<h3 className="text-2xl font-bold">Technical Achievements</h3>
								<ul className="text-sm leading-normal divide-y divide-font-black">
									{Array.isArray(project.achievements) ? (
										project.achievements.map((item, idx) => {
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
										<li>{project.achievements}</li>
									)}
								</ul>
							</div>
						)}
						{project.impact && (
							<div className="impact-box text-font-blue mb-4">
								<h3 className="text-2xl font-bold">Impact</h3>
								<ul className="text-sm leading-normal divide-y divide-font-blue">
									{Array.isArray(project.impact) ? (
										project.impact.map((item, idx) => {
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
										<li>{project.impact}</li>
									)}
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
