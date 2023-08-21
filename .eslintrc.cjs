module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'prettier',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: {
		project: './tsconfig.json',
	},
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
	},
};
