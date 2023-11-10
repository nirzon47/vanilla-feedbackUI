/** @type {import('tailwindcss').Config} */
export default {
	content: ['*.html'],
	theme: {
		extend: {
			backgroundImage: {
				happy: 'url("../assets/happy.png")',
				meh: 'url("../assets/neutral.png")',
				sad: 'url("../assets/sad.png")',
			},
		},
	},
	daisyui: {
		themes: [
			{
				custom: {
					primary: '#e63946',

					secondary: '#a8dadc',

					accent: '#457B9D',

					neutral: '#1D3557',

					'base-100': '#f1faee',

					info: '#94dbf4',

					success: '#20cba0',

					warning: '#e78b13',

					error: '#eb716b',
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
