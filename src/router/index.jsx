import { createHashRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import ProductList from '../pages/ProductList/ProductList'
import Checkout from '../pages/Checkout/Checkout'
import Login from '../pages/Login/Login'
import SimpleLayout from '../components/SimpleLayout/SimpleLayout'

const router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'products',
				element: <ProductList />,
			},
			{
				path: 'product/:id',
				// element: <product />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
			},
		],
	},
	{
		element: <SimpleLayout />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
])

export default router
