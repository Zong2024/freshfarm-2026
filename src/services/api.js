import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_PATH = import.meta.env.VITE_API_PATH
const TOKEN_KEY = 'freshfarm_token'

export const apiClient = axios.create({
	baseURL: `${BASE_URL}/api/${API_PATH}`,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
})

// --- 請求攔截器 (Request Interceptor) ---
apiClient.interceptors.request.use(
	config => {
		const token = document.cookie.replace(
			new RegExp(`(?:(?:^|.*;\\s*)${TOKEN_KEY}\\s*\\=\\s*([^;]*).*$)|^.*$`),
			'$1'
		)
		if (token) config.headers.Authorization = token
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

// --- 回應攔截器 (Response Interceptor) ---
apiClient.interceptors.response.use(
	response => {
		return response
	},
	error => {
		const statusCode = error.response?.status
		const errorMessage = error.response?.data?.message || error.message || '發生未知錯誤'

		if (statusCode === 401) {
			console.warn('身份驗證失敗，可能需要重新登入')
			document.cookie = `${TOKEN_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
			// window.location.href = '#/login'
		} else if (statusCode === 403) {
			console.warn('權限不足')
		} else if (statusCode === 404) {
			console.warn('找不到資源')
		} else if (statusCode >= 500) {
			console.error('伺服器錯誤，請稍後再試')
		}
		error.customMessage = errorMessage
		error.statusCode = statusCode

		console.error(`[API Error] ${statusCode ? `(${statusCode})` : ''} ${errorMessage}`)

		return Promise.reject(error)
	}
)
