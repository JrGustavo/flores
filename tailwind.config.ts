import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./animation/**/*.{js,ts,jsx,tsx,mdx}",
		"./public/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {},
			fontFamily: {
				bebas: ["Bebas Neue", "sans-serif"],
			},
			inset: {},
			padding: {},
			height: {},
			margin: {},
			fontSize: {
				sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
				base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
				lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
				label: "clamp(1.rem, 1vw + 1.31rem, 1.2rem)",
				"sub-title": "clamp(1.rem, 1.56vw + 1.56rem, 1.25rem)",
				title: "clamp(2.44rem, 2.38vw + 1.85rem, 2.8rem)",
				features: "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
				section: "clamp(3.81rem, 5.18vw + 2.52rem, 4rem)",
				hero: "clamp(4.77rem, 7.48vw + 2.9rem, 6rem)",
			},
			colors: {
				primary: {
					'700': '#1D3C34',
					'600': '#2D5443',
					'500': '#447964',
					'400': '#F9ECD7',
					'300': '#FDF888',
					'200': '#FFFFFF',
					'100': '#000000',

				},
				secondary: {

					'300': '#EECEE3',
					'200': '#A8CEC2',
					'100': '#F1B0B7',
					'50':  '#9BA2E1',
					'40':  '#D68E7E',


				},
			},
			width: {},
			gap: {},
		},
	},
	plugins: [],
};
export default config;
