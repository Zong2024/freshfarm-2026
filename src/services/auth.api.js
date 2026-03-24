import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const Login = async data => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/signin`, data)
    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || '登入失敗',
      code: error.response?.status,
    }
  }
}

export const checkAuth = async token => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/user/check`,
      {},
      {
        headers: { Authorization: token },
      }
    )
    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || '驗證失效',
    }
  }
}

export const logout = async token => {
  try {
    const response = await axios.post(
      `${BASE_URL}/logout`,
      {},
      {
        headers: { Authorization: token },
      }
    )
    return {
      success: true,
      message: response.data.message,
    }
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || '登出失敗',
    }
  }
}
