interface Project {
	id: number;
	title: string;
	subtitle: string;
	banner: string;
	role: string;
	show_pc: string;
	show_mo: string;
	overview: string;
	achievements: {
		[key: string]: string;
	}[];
	impact: {
		[key: string]: string;
	}[];
	tech: string[];
	links: {
		demo: string;
		github: string;
	};
}

/**
 * 根據 ID 尋找專案
 * @param projects 專案陣列，可以是 undefined 或 null
 * @param id 傳入的 ID，可以是數字、字串，或是 undefined/null
 */

export function findProjectById(projects: Project[] | null | undefined, id: string | number | null | undefined): Project | null {
	// 明確宣告回傳型別：要嘛是 Project 物件，要嘛是 null

	// 2. 檢查空值（原本的邏輯）
	if (!projects || !id) return null;

	// 3. 統一轉成數字。TS 允許對 string 或 number 執行 toString()
	const parsedId = parseInt(id.toString(), 10);

	// 4. 檢查是否為有效數字
	if (isNaN(parsedId)) return null;

	// 5. 尋找並回傳，找不到就給 null（使用空值合併運算子 ??）
	return projects.find(p => p.id === parsedId) ?? null;
}
