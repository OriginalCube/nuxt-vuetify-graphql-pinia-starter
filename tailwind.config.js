/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./client/components/**/*.{js,vue,ts}',
		'./client/layouts/**/*.vue',
		'./client/pages/**/*.vue',
		'./client/plugins/**/*.{js,ts}',
		'./client/nuxt.config.{js,ts}',
		'./client/app.vue',
	],
	theme: {
		extend: {
			colors: {
				pallete: {
					background: '#000c26',
					header: '#f8ce47',
					accent: '#ea9f0d',
					himp: '#ea9f0d',
					imp: '#d82cd0',
				},
			},
		},
	},
	plugins: [],
}
