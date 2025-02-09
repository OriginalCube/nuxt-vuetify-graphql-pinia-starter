module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-standard-vue/scss',
		'stylelint-config-prettier',
	],
	rules: {
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind'],
			},
		],
	},
}
