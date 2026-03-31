import { describe, it, expect } from "vitest";
import { findProjectById } from "../utils/projectUtils";

import mockProjects from "../mock/projects.json";

describe("findProjectById logic test", () => {
	it("should return the corresponding project when provided with a correct numeric ID", () => {
		expect(findProjectById(mockProjects, 1)).toEqual({ id: 1, title: "project A" });
	});

	it("should correctly convert and return when given a string ID", () => {
		expect(findProjectById(mockProjects, "2")).toEqual({ id: 2, title: "project B" });
	});

	it("should return null if the ID format is invalid (e.g. alphabetic string)", () => {
		expect(findProjectById(mockProjects, "abc")).toBeNull();
	});

	it("should return null if no project is found for the given ID", () => {
		expect(findProjectById(mockProjects, 99)).toBeNull();
	});
});
