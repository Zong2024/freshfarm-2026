import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// 將 '@' 符號指向 src 資料夾
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				// 使用現代編譯器 API
				api: 'modern-compiler',
				quietDeps: true,
				silenceDeprecations: ['import'],
			},
		},
	},
})
