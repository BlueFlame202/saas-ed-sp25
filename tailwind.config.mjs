/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			'primary': 'rgba(var(--primary-background), 1)',
			'secondary': 'rgba(var(--secondary-background), 1)'
		  },
		},
	  },
	plugins: [],
}
