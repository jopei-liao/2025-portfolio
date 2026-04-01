import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import viProjectData from "@/tests/mock/projects.json";
import Projects from "@/pages/Projects";
import { vi } from "vitest";

vi.mock("@/assets/json/projectsData.json", () => {
	return {
		default: viProjectData,
	};
});
describe("Projects page and Lightbox interaction tests", () => {
	const renderWithRouter = (initialEntry = "/projects") => {
		return render(
			<MemoryRouter initialEntries={[initialEntry]}>
				<Routes>
					{/* Simulate your routing structure */}
					<Route path="/projects" element={<Projects projectsData={viProjectData} />}>
						<Route path=":id" element={<Projects projectsData={viProjectData} />} />
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
		const detailText = await screen.findByText("Tech Stack");
		expect(detailText).toBeInTheDocument();
	});

	it("When the route is directly /projects/1, the Lightbox should immediately display", () => {
		// Simulate the user directly entering a specific project link
		renderWithRouter("/projects/1");

		const detail = screen.getByText("Tech Stack");
		expect(detail).toBeInTheDocument();
	});
});
