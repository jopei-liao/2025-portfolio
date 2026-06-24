import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
	query GetMyPortfolio {
		projects {
			id
			customId
			slug
			title
			sideProject
			subtitle
			role
			overview
			tech
			links
			banner {
				url
			}
			showPc {
				url
			}
			showMo {
				url
			}
			achievements {
				title
				content
			}
			impact {
				title
				content
			}
		}
	}
`;
