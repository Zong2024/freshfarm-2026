import { NavLink } from 'react-router-dom'
import logo from '@/assets/images/logo.png'

const SimpleHeader = () => {
	return (
		<header className="py-2 ">
			<div className="">
				<NavLink className="" to="/">
					<img src={logo} alt="首頁" />
				</NavLink>
			</div>
		</header>
	)
}

export default SimpleHeader
