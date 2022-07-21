import { useRouter } from "next/router";
import projectsList from "../../components/Projects/Projects";

export const DynamicProjectPage = () => {
	const router = useRouter();

	return (
		<div>
			<h1>{router.query.pid}</h1>
		</div>
	);
};

// Dynamically generate the project routes
export async function getStaticPaths() {
	// let data = await fetch("https://.../posts");
	const data = projectsList;
	console.log("DATA PROJECTS LIST TYPE", typeof data);
	// const pathMap = (project: ProjectCardProps) => {
	// 	return {
	// 		params: { id: project.title },
	// 	};
	// };

	// Get the paths we want to pre-render based on posts
	// const paths = data.map(pathMap);
	const paths = [{ params: { id: "lol" } }];

	// We'll pre-render only these paths at build time.
	return { paths, fallback: false };
}
