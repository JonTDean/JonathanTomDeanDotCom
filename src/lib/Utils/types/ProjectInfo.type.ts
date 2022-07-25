import { ApolloRefObjectType } from "./ApolloRefType";

type ProjectInfoType = {
	// Exclusive type for Apollo
	__typename?: "ProjectInfo";
	__ref?: ApolloRefObjectType;
	id?: string;
	site: string;
	repo: string;
	blog: string;
};

export default ProjectInfoType;
