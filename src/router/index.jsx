import { createHashRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import ProductList from '../pages/ProductList/ProductList'
import Checkout from '../pages/Checkout/Checkout'
import NotFound from '../pages/NotFound/NotFound'

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
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
])

export default router
