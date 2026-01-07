import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductList from './pages/ProductList'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Layout from './components/Layout/Layout'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/productDetail" element={<ProductDetail />} />
					<Route path="/checkout" element={<Checkout />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
