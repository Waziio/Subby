/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#123926',
				secondary: '#cfe5d8',
				third: '#FFFFFF',
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			fontSize: {
				xxs: '0.65rem',
				'3xl': '1.875rem',
			},
			boxShadow: {
				custom: '0 4px 30px rgba(0, 0, 0, 0.1)',
			},
			fontFamily: {
				fonts: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [require('tailwindcss-primeui')],
};
