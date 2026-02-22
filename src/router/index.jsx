import { createHashRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import ProductList from '../pages/ProductList/ProductList'
import Checkout from '../pages/Checkout/Checkout'
import Login from '../pages/Login/Login'
import SimpleLayout from '../components/SimpleLayout/SimpleLayout'
import ProductDetail from '@/pages/ProductDetail/ProductDetail'

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
				path: 'productDetail/:id',
				element: <ProductDetail />,
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
