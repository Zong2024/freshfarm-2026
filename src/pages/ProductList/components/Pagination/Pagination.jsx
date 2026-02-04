import { clsx } from 'clsx'
import styles from './Pagination.module.scss'
import { Link } from 'react-router-dom'
function Pagination({ pagination, chagePage }) {
	const isCurrentPage = pagination.current_page
	const handleClick = (e, page) => {
		e.preventDefault()
		chagePage(page)
	}
	return (
		<div>
			<nav aria-label="Page navigation example">
				<ul className={clsx('pagination justify-content-center', styles.pagination)}>
					<li className={`page-item me-3 ${!pagination.has_pre && 'disabled'}`}>
						<Link
							className={clsx(
								'page-link shadow-none border-0 d-flex justify-content-center',
								styles.paginationPage,
								styles.pageLink
							)}
							href="#"
							aria-label="Previous"
							onClick={e => handleClick(e, pagination.current_page - 1)}
						>
							<span className="material-icons">keyboard_arrow_left</span>
						</Link>
					</li>
					{Array.from({ length: pagination.total_pages }, (_, index) => (
						<li
							className={`page-item me-2 ${isCurrentPage === index + 1 && 'active'}`}
							aria-current="page"
							key={`${index}_page`}
						>
							<Link
								className={clsx(
									'page-link shadow-none agination rounded-circle border-0 py-1 px-2 text-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
								onClick={e => handleClick(e, index + 1)}
							>
								{index + 1}
							</Link>
						</li>
					))}
					<li className="page-item">
						<Link
							className={clsx(
								`page-link shadow-none border-0 d-flex justify-content-center ${!pagination.has_next && 'disabled'}`,
								styles.paginationPage,
								styles.pageLink
							)}
							href="#"
							aria-label="Next"
							onClick={e => handleClick(e, pagination.current_page + 1)}
						>
							<span className="material-icons">keyboard_arrow_right</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
export default Pagination
