/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Lato: ["Lato", "sans-serif"],
				RMO: ["Rubik Mono One", "sans-serif"],
				Karla: ["Karla", "sans-serif"],
				Oswald: ["Oswald", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
