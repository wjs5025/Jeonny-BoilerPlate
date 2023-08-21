module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:prettier/recommended',
		'prettier', // 충돌방지를 위해 가장 마지막에 작성
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: {
		project: './tsconfig.json',
	},
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		"prettier/prettier": ["error", { endOfLine: "auto" }],
	},
};
