import { createContext, useContext, useEffect, useState } from 'react'

const CompareContext = createContext()
export const useCompare = () => useContext(CompareContext)
export const CompareProvider = ({ children }) => {
  const [comparedItems, setComparedItems] = useState(() => {
    const saved = localStorage.getItem('compareItems')
    return saved ? JSON.parse(saved) : []
  })
  useEffect(() => {
    localStorage.setItem('compareItems', JSON.stringify(comparedItems))
  }, [comparedItems])

  const addCompare = product => {
    setComparedItems(prev => {
      if (prev.find(item => item.id === product.id)) return prev
      if (prev.length >= 3) return prev
      return [...prev, product]
    })
  }
  const removeCompare = id => {
    setComparedItems(prev => prev.filter(item => item.id !== id))
  }
  const clearCompare = () => setComparedItems([])
  const isFull = comparedItems.length >= 3

  return (
    <CompareContext.Provider
      value={{ comparedItems, isFull, addCompare, clearCompare, removeCompare }}
    >
      {children}
    </CompareContext.Provider>
  )
}
