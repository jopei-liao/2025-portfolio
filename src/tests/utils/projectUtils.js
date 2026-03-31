export const findProjectById = (projects, id) => {
	if (!projects || !id) return null;

	const parsedId = parseInt(id, 10);
	if (isNaN(parsedId)) return null;

	return projects.find(p => p.id === parsedId) || null;
};
