const FormSection = () => {
	return (
		<div className="row">
			<div className="col-lg-7">
				<div className="bg-gray-50 rounded-4 p-6 mb-6">
					<h2 className="h4 mb-4 text-primary-400">收件資料</h2>

					{/* 收件人姓名 */}
					<div className="d-lg-flex mb-4">
						<div className="w-100 pe-lg-4 mb-4 mb-lg-0">
							<label htmlFor="name" className="form-label">
								收件人姓名
							</label>
							<input type="text" className="form-control" id="name" placeholder="姓名" />
						</div>

						{/* 手機號碼 */}
						<div className="w-100">
							<label htmlFor="cellNumber" className="form-label">
								手機號碼
							</label>
							<input
								type="text"
								className="form-control"
								id="cellNumber"
								placeholder="0912345678"
							/>
						</div>
					</div>

					{/* 電子郵件 */}
					<div className="mb-4">
						<label htmlFor="mail" className="form-label">
							電子郵件
						</label>
						<input type="email" className="form-control" id="mail" placeholder="aaa@gmail.com" />
					</div>

					{/* 地址 */}
					<div className="mb-4">
						<label htmlFor="adress" className="form-label">
							地址
						</label>
						<div className="d-flex pb-2">
							<button className="form-select text-start py-4 me-4" type="button">
								台北市
							</button>
							<button className="form-select text-start py-4" type="button">
								大安區
							</button>
						</div>
						<input
							type="text"
							className="form-control"
							placeholder="詳細地址"
							aria-label="詳細地址"
						/>
					</div>

					{/* 郵遞區號 */}
					<div className="mb-4">
						<label htmlFor="postalCode" className="form-label">
							郵遞區號
						</label>
						<input type="text" className="form-control" id="postalCode" defaultValue="106" />
					</div>
				</div>
			</div>

			<div className="col-lg-5">
				<div className="bg-gray-50 rounded-4 p-6 mb-6">
					<h2 className="h4 mb-4 text-primary-400">折扣碼</h2>
					<div className="d-flex">
						<input type="text" className="form-control me-4" placeholder="請輸入折扣代碼" />
						<button className="btn btn-primary-300 text-white text-nowrap fw-bold px-6">
							使用
						</button>
					</div>
				</div>
				<div className="bg-gray-50 rounded-4 p-6">
					<h2 className="h4 mb-4 text-primary-400">付款金額</h2>
					<div className="d-flex justify-content-between pb-2">
						<p>商品金額</p>
						<p className="fw-bold">NT$ 0</p>
					</div>
					<div className="d-flex justify-content-between pb-2">
						<p>折扣碼折抵</p>
						<p className="fw-bold">-NT$ 0</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>運費</p>
						<p className="fw-bold">NT$ 0</p>
					</div>
					<hr />
					<div className="d-flex align-items-center justify-content-between mb-4">
						<p>總金額</p>
						<p className="h3 text-secondary-300">NT$ 0</p>
					</div>
					<div>
						<button className="btn btn-primary-300 text-white w-100 fw-bold d-flex align-items-center justify-content-center">
							前往付款<span class="material-icons fs-6 ms-2">arrow_forward</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormSection
