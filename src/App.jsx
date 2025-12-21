import { Route, Routes } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Checkout from './pages/Checkout'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<ProductList />} />
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
