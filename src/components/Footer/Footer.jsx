import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Footer.module.scss'
import logo_2 from '../../assets/images/logo-footer.png'
const Footer = () => {
	return (
		<footer
			className={clsx('text-center py-lg-9 py-8 bg-accent', styles.footer)}
			data-aos="fade-zoom-in"
		>
			<div className="container">
				<div className="mb-6">
					<Link to="/">
						<img src={logo_2} alt="logo" className="logo" />
					</Link>
				</div>
				<ul
					className={clsx('nav d-lg-flex d-block justify-content-lg-center mb-6', styles.footerNav)}
				>
					<li className={clsx('py-2 mb-4 mb-lg-0', styles.navItem)}>
						<Link className={clsx('fw-bold  px-lg-6', styles.navLink)} to="/qa">
							常見問題
						</Link>
					</li>
					<li className={clsx('py-2 mb-4 mb-lg-0', styles.navItem)}>
						<Link className={clsx('fw-bold  px-lg-6', styles.navLink)} to="/contact-us ">
							聯絡我們
						</Link>
					</li>
					<li className={clsx('py-2 mb-4 mb-lg-0', styles.navItem)}>
						<Link className={clsx('fw-bold  px-lg-6', styles.navLink)} to="/privacy-policy">
							隱私權政策
						</Link>
					</li>
					<li className={clsx('py-2', styles.navItem)}>
						<Link className={clsx('fw-bold  px-lg-6', styles.navLink)} to="/about-freshfarm">
							關於我們
						</Link>
					</li>
				</ul>
				<div className="mb-6 text-white">
					<p className="fs-7 fs-lg-6 mb-2">
						服務時間：週一至周五 <time>09:00</time> - <time>12:30</time>｜<time>13:30</time> -
						<time>17:30</time>
					</p>
					<p className="fs-7 fs-lg-6">連絡電話：0000-000-000</p>
				</div>

				<p className="fs-7 fs-lg-6 text-gray-200">
					Copyright&nbsp;&copy;&nbsp;FreshFarm 2025 All Rights Reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
