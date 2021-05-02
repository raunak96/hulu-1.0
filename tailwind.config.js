module.exports = {
	mode: "jit", // Just in Time compiler
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				bounce: "bounce 0.6s infinite",
			},
			screens: {
				"3xl": "2000px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
