import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

import styles from './Layout.module.scss'
import { clsx } from 'clsx'
const Layout = () => {
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	return (
		<>
			<Navbar isHomePage={isHomePage} />
			<main className={clsx(!isHomePage && styles.paddingForNavbar)}>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Layout
