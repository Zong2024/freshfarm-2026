import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/scss/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider } from './contexts/AuthContext'
import { FavoriteProvider } from './contexts/FavoriteContext'
import { CompareProvider } from './contexts/CompareContext'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <FavoriteProvider>
        <CompareProvider>
          <RouterProvider router={router} />
        </CompareProvider>
      </FavoriteProvider>
    </CartProvider>
  </AuthProvider>
)
