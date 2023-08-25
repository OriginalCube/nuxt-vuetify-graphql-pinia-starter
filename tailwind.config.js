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
		extend: {},
	},
	plugins: [],
}
