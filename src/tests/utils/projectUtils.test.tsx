import { describe, it, expect } from "vitest";
import { findProjectBySlug } from "@/tests/utils/projectUtils";

import mockProjects from "@/tests/mock/projects.json";

describe("findProjectBySlug logic test", () => {
	it("should return the corresponding project when provided with a correct project name", () => {
		// Verify that the function successfully finds and returns the correct project object by its slug
		expect(findProjectBySlug(mockProjects, "project-A")).toMatchObject({ id: "1", customId: 1, title: "project A", slug: "project-A", subtitle: "project A subtitle" });
	});

	it("should return null if the project format is invalid (e.g. alphabetic string)", () => {
		// Verify that the function gracefully handles invalid slug formats and returns null
		expect(findProjectBySlug(mockProjects, "abc")).toBeNull();
	});

	it("should return null if no project is found for the given slug", () => {
		// Verify that the function returns null when the slug doesn't exist in the data
		expect(findProjectBySlug(mockProjects, "lost-found")).toBeNull();
	});
});
