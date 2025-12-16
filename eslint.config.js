// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default [
	// 忽略編譯輸出
	{ ignores: ['dist/**', 'node_modules/**'] },

	// JS 基本規則
	js.configs.recommended,

	// React JSX runtime 規則（flat 版本）
	reactPlugin.configs.flat['jsx-runtime'],

	// 主要專案規則
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
			import: importPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			// hooks / a11y / import 推薦規則
			...reactHooks.configs.recommended.rules,
			...jsxA11y.configs.recommended.rules,
			...importPlugin.configs.recommended.rules,

			// 確保 JSX 使用的元件被視為「有使用」
			'react/jsx-uses-vars': 'error',

			// 讓 Prettier 決定風格：單引號＋無分號
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					semi: false,
				},
			],
			semi: 'off',
			quotes: 'off',

			// React 17+ 不需要手動 import React
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
		},
		settings: {
			react: { version: 'detect' },
			'import/resolver': {
				node: { extensions: ['.js', '.jsx'] },
			},
		},
	},
	// 專門給 vite.config.js，用 Node 環境並關掉 import/no-unresolved
	{
		files: ['vite.config.*'],
		languageOptions: {
			sourceType: 'module',
			ecmaVersion: 2022,
		},
		rules: {
			'import/no-unresolved': 'off',
		},
	},
	// 放在最後：關掉和 Prettier 衝突的規則
	eslintConfigPrettier,
]
