import { gql } from "@apollo/client";

const GET_ALL_PROJECTS_QUERY = gql`
	query {
		getAllProjects {
			id
			title
			image
			description
			projectInfo {
				id
				site
				repo
				blog
			}
		}
	}
`;

export default GET_ALL_PROJECTS_QUERY;
