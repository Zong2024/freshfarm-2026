import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/scss/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</AuthProvider>
)
