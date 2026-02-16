import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { Login, checkAuth } from '../services/auth.api'
import axios from 'axios'

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

const TOKEN_KEY = 'freshfarm_token'

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [user, setUser] = useState(null)

	// --- Cookie Helper Functions ---
	const setToken = (token, expired) => {
		document.cookie = `${TOKEN_KEY}=${token}; expires=${new Date(expired)}; path=/`
	}

	const getToken = () => {
		return document.cookie.replace(
			new RegExp(`(?:(?:^|.*;\\s*)${TOKEN_KEY}\\s*\\=\\s*([^;]*).*$)|^.*$`),
			'$1'
		)
	}

	const removeToken = () => {
		document.cookie = `${TOKEN_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
	}

	// --- Actions ---

	const login = async data => {
		const res = await Login(data)

		if (res.success) {
			setUser(data.username)
			const { token, expired } = res.data
			setToken(token, expired)
			setIsAuth(true)
			// 設定 axios 預設 header，避免重新整理前 API 呼叫失敗
			axios.defaults.headers.common['Authorization'] = token
			return { success: true }
		}
		return res
	}

	const logout = useCallback(() => {
		removeToken()
		setIsAuth(false)
		delete axios.defaults.headers.common['Authorization']
	}, [])

	// --- Initialization ---

	useEffect(() => {
		const initAuth = async () => {
			const token = getToken()
			if (token) {
				// 有 Token，驗證有效性
				axios.defaults.headers.common['Authorization'] = token
				const res = await checkAuth(token)
				if (res.success) {
					// setUser
					console.log(res.success)

					setIsAuth(true)
				} else {
					// Token 失效，清除
					removeToken()
					setIsAuth(false)
					delete axios.defaults.headers.common['Authorization']
				}
			} else {
				setIsAuth(false)
			}
			setIsLoading(false)
		}

		initAuth()
	}, [])

	const value = {
		isAuth,
		isLoading,
		login,
		logout,
		user,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
