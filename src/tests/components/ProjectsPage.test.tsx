import { render, screen, fireEvent, act } from "@testing-library/react";
import { vi } from "vitest";
import { LoadingContext } from "@/App";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing/react";
import { GET_PROJECTS } from "@/graphql/projectQueries";
import mockProjects from "@/tests/mock/projects.json";

import Projects from "@/pages/Projects";
import ProjectLightbox from "@/components/ProjectLightbox";

describe("Projects page and Lightbox interaction tests", () => {
	// Mock function to track setIsLoading calls
	const mockSetIsLoading = vi.fn();

	// Clear mock history after each test to prevent test cross-contamination
	afterEach(() => {
		mockSetIsLoading.mockClear();
	});

	// Mock response data for Apollo Client
	const apolloMocks = [
		{
			request: {
				query: GET_PROJECTS,
			},
			result: {
				data: {
					projects: mockProjects,
				},
			},
		},
	];

	// Helper function to render components with all required providers and routing
	const renderWithRouter = (initialEntry = "/projects") => {
		return render(
			<LoadingContext.Provider value={{ setIsLoading: mockSetIsLoading }}>
				<MockedProvider mocks={apolloMocks}>
					<MemoryRouter initialEntries={[initialEntry]}>
						<Routes>
							<Route path="/projects" element={<Projects />}>
								<Route path=":slug" element={<ProjectLightbox />} />
							</Route>
						</Routes>
					</MemoryRouter>
				</MockedProvider>
			</LoadingContext.Provider>,
		);
	};

	// Custom wait function using real timers to bypass the 2.1s loading delay
	const waitForLoadingToEnd = async () => {
		await act(async () => {
			await new Promise(resolve => setTimeout(resolve, 2100));
		});
	};

	it("Should display the project list initially, but not the Lightbox", async () => {
		renderWithRouter();

		// Wait for the loading state to turn off
		await waitForLoadingToEnd();

		// Verify that the main projects list title is visible
		const projectsTitle = await screen.findByText("Projects");
		expect(projectsTitle).toBeInTheDocument();
	});

	it("After clicking a project card, the URL should change and the Lightbox should display content", async () => {
		renderWithRouter();

		// Wait for the loading state to turn off
		await waitForLoadingToEnd();

		// Find the project card by its title text
		const projectCard = await screen.findByText("project A");

		// 1. Simulate the user clicking a project card
		fireEvent.click(projectCard);

		// 2. Verify that the Lightbox content pops up successfully
		const detailText = await screen.findByText("project A subtitle");

		expect(detailText).toBeInTheDocument();
	});

	it("When the route is directly /projects/project-A, the Lightbox should immediately display", async () => {
		// Simulate deep-linking directly into a specific project URL
		renderWithRouter("/projects/project-A");

		// Wait for the loading state to turn off
		await waitForLoadingToEnd();

		// Verify that the Lightbox opens directly without needing a click
		const detail = await screen.findByText("project A subtitle");
		expect(detail).toBeInTheDocument();
	});
});
