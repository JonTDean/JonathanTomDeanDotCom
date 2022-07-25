import { ApolloRefObjectType } from "./ApolloRefType";
import ProjectInfoType from "./ProjectInfo.type";

type ProjectType = {
	// Exclusive type for Apollo
	__typename?: "Project";
	__ref?: ApolloRefObjectType;
	// GraphQL/Apollo
	id?: string;
	title: string;
	image: string;
	description: string;
	projectInfo: ProjectInfoType;
};

export default ProjectType;
