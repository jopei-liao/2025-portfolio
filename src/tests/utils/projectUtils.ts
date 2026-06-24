interface HighlightItem {
	title: string;
	content: string;
}

export interface Project {
	id: string;
	slug: string;
	customId: number;
	title: string;
	sideProject: boolean;
	subtitle: string;
	role: string;
	overview: string;
	tech: string[];
	links: {
		demo: string;
		github: string;
	};
	banner: {
		url: string;
	} | null;
	showPc: {
		url: string;
	} | null;
	showMo: {
		url: string;
	} | null;
	achievements: HighlightItem[];
	impact: HighlightItem[];
}

export interface QueryData {
	projects: Project[];
}

/**
 * Finds project by slug
 * @param projects The array of projects to search through.
 * @param slug The target URL slug (e.g., "lost-and-found").
 * @returns The matched project object, or null if not found or if inputs are invalid.
 */
export function findProjectBySlug(projects: Project[] | null | undefined, slug: string | null | undefined): Project | null {
	if (!projects || !slug) return null;
	const targetSlug = slug.trim().toLowerCase();
	return projects.find(p => p.slug.toLowerCase() === targetSlug) ?? null;
}
