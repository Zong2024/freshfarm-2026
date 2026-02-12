import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
	const location = useLocation()

	const isProductRelated = location.pathname.includes('/product')

	return (
		<div className="container py-5 my-5">
			<div className="row justify-content-center text-center">
				<div className="col-md-6">
					<h1 className="display-1 fw-bold text-success">404</h1>
					<h2 className="mb-3">找不到頁面</h2>
					<p className="text-muted mb-4">
						{isProductRelated
							? '您尋找的商品可能已下架，或者網址有誤。'
							: '您輸入的網址不存在，請確認後再試。'}
					</p>

					<Link
						to={isProductRelated ? '/products' : '/'}
						className="btn btn-primary btn-lg rounded-pill px-5"
					>
						{isProductRelated ? '返回產品列表' : '回首頁'}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NotFound
