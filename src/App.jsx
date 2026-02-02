import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Checkout from './pages/Checkout/Checkout'
import Layout from './components/Layout/Layout'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/productDetail/:id" element={<ProductDetail />} />
					<Route path="/checkout" element={<Checkout />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
