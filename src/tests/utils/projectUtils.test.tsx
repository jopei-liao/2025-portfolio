import { describe, it, expect } from "vitest";
import { findProjectById } from "@/tests/utils/projectUtils";

import mockProjects from "@/tests/mock/projects.json";

describe("findProjectById logic test", () => {
	it("should return the corresponding project when provided with a correct numeric ID", () => {
		expect(findProjectById(mockProjects, 1)).toMatchObject({ id: 1, title: "project A", subtitle: "project A subtitle" });
	});

	it("should correctly convert and return when given a string ID", () => {
		expect(findProjectById(mockProjects, "2")).toMatchObject({ id: 2, title: "project B", subtitle: "project B subtitle" });
	});

	it("should return null if the ID format is invalid (e.g. alphabetic string)", () => {
		expect(findProjectById(mockProjects, "abc")).toBeNull();
	});

	it("should return null if no project is found for the given ID", () => {
		expect(findProjectById(mockProjects, 99)).toBeNull();
	});
});
