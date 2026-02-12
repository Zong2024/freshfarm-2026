import { Outlet } from 'react-router-dom'
import SimpleHeader from './SimpleHeader'
import SimpleFooter from './SimpleFooter'

const SimpleLayout = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<SimpleHeader />
			<main className="flex-grow-1">
				<Outlet />
			</main>
			<SimpleFooter />
		</div>
	)
}

export default SimpleLayout
