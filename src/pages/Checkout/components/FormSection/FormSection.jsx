import { useEffect } from 'react'
import { currency } from '@/utils/currency'
import { useForm, Controller, useWatch } from 'react-hook-form'
import { useCart } from '@/context/cartContext'
import btnStyles from '@/components/button/Button.module.scss'
import { clsx } from 'clsx'
import { twData } from '@/constants/twData'
import { postalCodeData } from '@/constants/postalCodeData'

const FormSection = () => {
	const { cart, total, finalTotal } = useCart()
	const isCartEmpty = cart.length === 0

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setValue,
	} = useForm({
		mode: 'onBlur',
		shouldUnregister: true,
		defaultValues: {
			shippingMethod: 'delivery',
			name: '',
			tel: '',
			email: '',
			city: '',
			district: '',
			address: '',
			postalCode: '',
		},
	})

	const selectedCity = useWatch({
		control,
		name: 'city',
	})

	const selectedDistrict = useWatch({
		control,
		name: 'district',
	})

	const shippingMethod = useWatch({
		control,
		name: 'shippingMethod',
	})

	const shipping = shippingMethod === 'pickup' ? 0 : total > 1000 || total === 0 ? 0 : 150

	useEffect(() => {
		if (shippingMethod === 'pickup') {
			setValue('city', '')
			setValue('district', '')
			setValue('address', '')
			setValue('postalCode', '')
		}
	}, [shippingMethod, setValue])

	useEffect(() => {
		if (selectedCity && selectedDistrict) {
			const code = postalCodeData[selectedCity]?.[selectedDistrict] || ''
			setValue('postalCode', code)
		}
	}, [selectedCity, selectedDistrict, setValue])

	const districts = selectedCity ? twData[selectedCity] : []

	const onSubmit = data => {
		console.log('表單資料：', data)
	}

	if (isCartEmpty) return null

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<div className="col-lg-7">
					{/* 配送方式 */}
					<div className="bg-gray-50 rounded-4 p-6 mb-6">
						<h2 className="h4 mb-4 text-primary-400">配送方式</h2>
						<div className="form-check mb-4">
							<input
								className="form-check-input"
								type="radio"
								value="delivery"
								{...register('shippingMethod')}
							/>
							<label className="form-check-label" htmlFor="ShippingMethod1">
								低溫宅配 (運費NT$150，消費滿NT$1,000免運費)
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								value="pickup"
								{...register('shippingMethod')}
							/>
							<label className="form-check-label" htmlFor="ShippingMethod2">
								到店取貨
							</label>
						</div>
					</div>
					<div className="bg-gray-50 rounded-4 p-6">
						<h2 className="h4 mb-4 text-primary-400">收件資料</h2>

						{/* 收件人姓名 */}
						<div className="d-lg-flex mb-4">
							<div className="w-100 pe-lg-4 mb-4 mb-lg-0">
								<label htmlFor="name" className="form-label">
									收件人姓名
								</label>
								<input
									type="text"
									className="form-control"
									id="name"
									placeholder="姓名"
									{...register('name', {
										required: '請輸入收件人姓名',
										minLength: { value: 2, message: '姓名至少 2 個字' },
									})}
								/>
								{errors.name && <p className="text-danger">{errors.name.message}</p>}
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
									{...register('tel', {
										required: '請輸入手機號碼',
										minLength: { value: 10, message: '手機號碼為10碼' },
										maxLength: { value: 10, message: '手機號碼為10碼' },
										pattern: {
											value: /^09\d{8}$/,
											message: '請輸入正確的手機號碼',
										},
									})}
								/>
								{errors.tel && <p className="text-danger">{errors.tel.message}</p>}
							</div>
						</div>

						{/* 電子郵件 */}
						<div className="mb-4">
							<label htmlFor="mail" className="form-label">
								電子郵件
							</label>
							<input
								type="email"
								className="form-control"
								id="mail"
								placeholder="aaa@gmail.com"
								{...register('email', {
									required: '請輸入電子郵件',
									pattern: {
										value: /^\S+@\S+$/i,
										message: '電子郵件格式不正確',
									},
								})}
							/>
							{errors.email && <p className="text-danger">{errors.email.message}</p>}
						</div>
						{shippingMethod === 'delivery' && (
							<>
								{/* 地址 */}
								<div className="mb-4">
									<label htmlFor="address" className="form-label">
										地址
									</label>
									<div className="d-flex pb-2">
										<div className="w-100 me-4">
											<Controller
												name="city"
												control={control}
												render={({ field }) => (
													<div className="dropdown w-100">
														<button
															className="form-select text-start py-4 dropdown-toggle"
															type="button"
															data-bs-toggle="dropdown"
															aria-expanded="false"
														>
															{field.value || '請選擇縣市'}
														</button>
														<ul
															className="dropdown-menu w-100 overflow-auto"
															style={{ maxHeight: '200px' }}
														>
															{Object.keys(twData).map(city => (
																<li key={city}>
																	<button
																		type="button"
																		className={`dropdown-item ${field.value === city ? 'active' : ''}`}
																		onClick={() => {
																			field.onChange(city)
																			setValue('district', '')
																			setValue('postalCode', '')
																		}}
																	>
																		{city}
																	</button>
																</li>
															))}
														</ul>
													</div>
												)}
											/>

											{errors.city && <p className="text-danger">{errors.city.message}</p>}
										</div>
										<Controller
											name="district"
											control={control}
											rules={{ required: '請選擇區域' }}
											render={({ field }) => (
												<div className="dropdown w-100">
													<button
														className="form-select text-start py-4 dropdown-toggle"
														type="button"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														{field.value || '請選擇區域'}
													</button>
													<ul
														className="dropdown-menu w-100 overflow-auto"
														style={{ maxHeight: '200px' }}
													>
														{districts.map(d => (
															<li key={d}>
																<button
																	type="button"
																	className={`dropdown-item ${field.value === d ? 'active' : ''}`}
																	onClick={() => field.onChange(d)}
																>
																	{d}
																</button>
															</li>
														))}
													</ul>
													{errors.district && (
														<p className="text-danger">{errors.district.message}</p>
													)}
												</div>
											)}
										/>
									</div>

									<input
										type="text"
										className="form-control"
										placeholder="詳細地址"
										aria-label="詳細地址"
										{...register('address', {
											required: '請輸入地址',
										})}
									/>
									{errors.address && <p className="text-danger">{errors.address.message}</p>}
								</div>

								{/* 郵遞區號 */}
								<div>
									<label htmlFor="postalCode" className="form-label">
										郵遞區號
									</label>
									<input
										type="text"
										className="form-control"
										id="postalCode"
										readOnly
										{...register('postalCode')}
									/>
								</div>
							</>
						)}
					</div>
				</div>

				<div className="col-lg-5">
					<div className="bg-gray-50 rounded-4 p-6 mb-6">
						<h2 className="h4 mb-4 text-primary-400">折扣碼</h2>
						<div className="d-flex">
							<input type="text" className="form-control me-4" placeholder="請輸入折扣代碼" />
							<button type="button" className="btn py-4 px-6 text-nowrap _cartButton_kf050_1">
								使用
							</button>
						</div>
					</div>
					<div className="bg-gray-50 rounded-4 p-6">
						<h2 className="h4 mb-4 text-primary-400">付款金額</h2>
						<div className="d-flex justify-content-between pb-2">
							<p>商品金額</p>
							<p className="fw-bold">NT$ {currency(finalTotal)}</p>
						</div>
						<div className="d-flex justify-content-between pb-2">
							<p>折扣碼折抵</p>
							<p className="fw-bold">-NT$ 0</p>
						</div>
						<div className="d-flex justify-content-between">
							<p>運費</p>
							<p className="fw-bold">NT$ {currency(shipping)}</p>
						</div>
						<hr />
						<div className="d-flex align-items-center justify-content-between mb-4">
							<p>總金額</p>
							<p className="h3 text-secondary-300">NT$ {currency(finalTotal + shipping)}</p>
						</div>
						<div>
							<button
								type="submit"
								className={clsx(
									'btn w-100 fw-bold d-flex align-items-center justify-content-center',
									btnStyles.cartButton
								)}
							>
								前往付款<span className="material-icons fs-6 ms-2">arrow_forward</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default FormSection
