import { createHashRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import ProductList from '../pages/ProductList'
import Checkout from '../pages/Checkout/Checkout'

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
])

export default router
