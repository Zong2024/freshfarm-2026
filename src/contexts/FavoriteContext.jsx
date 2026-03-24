import { createContext, useContext, useState } from 'react'
import { useAuth } from './AuthContext'
import Toast from '@/utils/toast'

const FavoriteContext = createContext()

export const useFavorite = () => useContext(FavoriteContext)
export const FavoriteProvider = ({ children }) => {
  const { isAuth, user } = useAuth()
  const userKey = isAuth ? `favorites_${user}` : 'favorites_guest'
  const [, setFavoritesState] = useState([])

  const favorites =
    isAuth && user
      ? JSON.parse(localStorage.getItem(userKey) || '[]') // 登入 -> 顯示對應使用者收藏
      : [] // 登出 -> 顯示未收藏

  const toggleFavorite = productId => {
    if (!isAuth) {
      Toast.fire({
        icon: 'warning',
        title: '請先登入會員',
        text: '登入後才能使用收藏功能',
      })
      return
    }
    const savedState = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId]
    setFavoritesState(savedState)
    localStorage.setItem(userKey, JSON.stringify(savedState))
  }
  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}
