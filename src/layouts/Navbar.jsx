import logo from '../assets/images/logo.png'
const Navbar = () => {
	return (
		<>
			<div className="nav-box">
				<div className="container">
					<div id="nav" className="py-2 py-lg-4 px-3 px-lg-7 navbar-rounded mt-lg-8 bg-white">
						<nav className="navbar navbar-expand-lg header-nav">
							<div className="container p-0">
								<a
									className="navbar-brand py-0"
									href="/"
									// tabindex="-1"
									aria-disabled="true"
								>
									<img src={logo} alt="logo" className="nav-logo object-fit-cover" />
								</a>
								<button
									className="navbar-toggler border-0 bg-gray-100 p-2"
									type="button"
									data-bs-toggle="offcanvas"
									data-bs-target="#offcanvasNavbar"
								>
									<span className="navbar-toggler-icon"></span>
								</button>
								<div
									className="offcanvas offcanvas-end bg-white"
									// tabindex="-1"
									id="offcanvasNavbar"
									aria-labelledby="offcanvasNavbarLabel"
								>
									<div className="offcanvas-header px-3 py-2 p-lg-0">
										<a href="/" className="offcanvas-title" id="offcanvasNavbarLabel">
											<img
												src={logo}
												alt="logo"
												className="object-fit-cover"
												style={{ width: '64px', height: '53px' }}
											/>
										</a>
										<button
											type="button"
											className="btn-close me-0 bg-gray-100"
											data-bs-dismiss="offcanvas"
											aria-label="Close"
										></button>
									</div>
									<div className="offcanvas-body px-6 py-6 p-lg-0">
										<ul className="navbar-nav ms-auto">
											<li className="nav-item pe-lg-8 pb-5 pb-lg-0  nav-bottom-line">
												<a className="nav-link text-lg-center p-0" aria-current="page" href="/">
													<span className="fs-lg-4 fs-5 fw-bold">首頁</span>
													<p className="text-gray-300 ">Home</p>
												</a>
											</li>
											<li className="nav-item py-5 py-lg-0 nav-bottom-line pe-lg-8 ">
												<a className="nav-link text-lg-center  p-0" href="/">
													<span className="fs-lg-4 fs-5 fw-bold">產地直送</span>
													<p className="text-gray-300">Delivery</p>
												</a>
											</li>
											<li className="nav-item py-5 py-lg-0 nav-bottom-line pe-lg-8">
												<a className="nav-link text-lg-center p-0" href="/">
													<span className="fs-lg-4 fs-5 fw-bold">購物車</span>
													<p className="text-gray-300">Cart</p>
												</a>
											</li>
											<li className="nav-item py-5 py-lg-0">
												{/* <!-- 未登入 --> */}
												{/* <!-- <a className="nav-link text-lg-center  p-0" href="#">
                                                        <span className="fs-lg-4 fs-5 fw-bold">登入/註冊</span>
                                                        <p className="text-gray-300">Sign in</p>
                                                    </a> --> */}
												{/* <!-- 已登入 --> */}
												<div
													className="nav-link dropdown-toggle p-0 d-flex align-items-center"
													style={{ cursor: 'pointer' }}
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<div>
														<span className="fs-lg-4 fs-5 fw-bold">用戶名稱</span>
														<p className="text-gray-300 text-lg-center">Account</p>
													</div>
													<div className="align-self-center d-lg-none ms-auto">
														<span className="material-icons ">keyboard_arrow_right</span>
													</div>
												</div>
												<ul className="dropdown-menu dropdown-menu-end border-0 rounded-3 dropdown-shadow mt-lg-6 p-4 ">
													<h6 className="text-primary-400 mb-3 dropdown-top-line pt-4 pt-lg-0">
														會員中心
													</h6>
													<li>
														<a className="dropdown-item  me-2 mb-3 mb-lg-1" href="/">
															<span className="material-icons align-bottom me-2">
																account_circle
															</span>
															我的帳戶
														</a>
													</li>
													<li>
														<a className="dropdown-item  me-2 mb-3 mb-lg-1" href="/">
															<span className="material-icons align-bottom me-2">description</span>
															訂單管理
														</a>
													</li>
													<li>
														<a className="dropdown-item  me-2 mb-3 mb-lg-1" href="/">
															<span className="material-icons align-bottom me-2">
																favorite_border
															</span>
															收藏清單{' '}
														</a>
													</li>
													<li>
														<a className="dropdown-item " href="/">
															<span className="material-icons align-bottom me-2">settings</span>
															個人資料設定
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
