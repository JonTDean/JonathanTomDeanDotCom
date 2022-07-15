export type BlogCardAnalyticTypes = {
	date: Date;
	readTime: Date;
	views: number;
};

export type BlogCardTypes = {
	title: string;
	analytics: BlogCardAnalyticTypes;
	description: string;
	image: string;
	link: string;
};

const blog1 = {
	title: "Blog 1",
	analytics: {
		date: new Date(),
		readTime: new Date(),
		views: 0,
	},
	description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
	image: "https://source.unsplash.com/random/200x200",
	link: "https://www.google.com",
};

const blog2 = {
	title: "Blog 2",
	analytics: {
		date: new Date(),
		readTime: new Date(),
		views: 0,
	},
	description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
	image: "https://source.unsplash.com/random/200x200",
	link: "https://www.google.com",
};

const blog3 = {
	title: "Blog 3",
	analytics: {
		date: new Date(),
		readTime: new Date(),
		views: 0,
	},
	description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
	image: "https://source.unsplash.com/random/200x200",
	link: "https://www.google.com",
};

const Blogs: BlogCardTypes[] = [blog1, blog2, blog3];

export default Blogs;
