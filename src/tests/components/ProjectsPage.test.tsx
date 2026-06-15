import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { vi } from "vitest";

import Projects from "@/pages/Projects";
import ProjectLightbox from "@/components/ProjectLightbox";

vi.mock("@/assets/json/projectsData.json", () => {
	return {
		default: require("../../tests/mock/projects.json"),
	};
});

describe("Projects page and Lightbox interaction tests", () => {
	const renderWithRouter = (initialEntry = "/projects") => {
		return render(
			<MemoryRouter initialEntries={[initialEntry]}>
				<Routes>
					{/* Simulate your routing structure */}
					<Route path="/projects" element={<Projects />}>
						<Route path=":id" element={<ProjectLightbox />} />
					</Route>
				</Routes>
			</MemoryRouter>,
		);
	};
	it("Should display the project list initially, but not the Lightbox", () => {
		renderWithRouter();
		// Check if the list title exists
		expect(screen.getByText("Projects")).toBeInTheDocument();
	});

	it("After clicking a project card, the URL should change and the Lightbox should display content", async () => {
		renderWithRouter();
		// 1. Simulate the user clicking a project in the list
		const projectCard = screen.getByText("project A");
		fireEvent.click(projectCard);
		// 2. Check if the Lightbox pops up (search for text in the Lightbox)
		const detailText = await screen.findByText("project A subtitle");
		expect(detailText).toBeInTheDocument();
	});

	it("When the route is directly /projects/1, the Lightbox should immediately display", () => {
		// Simulate the user directly entering a specific project link
		renderWithRouter("/projects/1");

		const detail = screen.getByText("project A subtitle");
		expect(detail).toBeInTheDocument();
	});
});
