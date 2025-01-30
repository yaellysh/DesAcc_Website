/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'sharp': '5px 5px 0px rgba(0, 0, 0, 0.3)',  
			  },
			  fontFamily: {
				albert: ['"Albert Sans"', 'sans-serif'],
				customSerif: ['"Cormorant Garamond"', 'serif'],     
			  },
			  screens: {
				'3xl': '1920px',
				'4xl': '2560px',
			  },
		}
	},
	plugins: [],
}
