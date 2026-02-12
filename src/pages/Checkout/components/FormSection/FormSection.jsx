import { useState, useEffect } from 'react'
import { currency } from '@/utils/currency'
import { useForm, Controller, useWatch } from 'react-hook-form'

const FormSection = ({ cart }) => {
	const isCartEmpty = cart.carts.length === 0

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		control,
		setValue,
	} = useForm({
		mode: 'onChange',
		shouldUnregister: true,
		defaultValues: {
			shippingMethod: 'delivery',
			name: '',
			tel: '',
			email: '',
			city: '台北市',
			district: '大安區',
			address: '',
			postalCode: '106',
		},
	})

	const shippingMethod = useWatch({
		control,
		name: 'shippingMethod',
	})

	const shipping = shippingMethod === 'pickup' ? 0 : cart.total > 1000 || cart.total === 0 ? 0 : 150
	const finalTotal = cart.total + shipping

	useEffect(() => {
		if (shippingMethod === 'pickup') {
			setValue('city', '')
			setValue('district', '')
			setValue('address', '')
			setValue('postalCode', '')
		}
	}, [shippingMethod, setValue])

	const cityDistrictMap = {
		台北市: [
			'中正區',
			'大同區',
			'中山區',
			'松山區',
			'大安區',
			'萬華區',
			'信義區',
			'士林區',
			'北投區',
			'內湖區',
			'南港區',
			'文山區',
		],
		新北市: [
			'板橋區',
			'三重區',
			'中和區',
			'永和區',
			'新莊區',
			'新店區',
			'土城區',
			'樹林區',
			'鶯歌區',
			'三峽區',
			'淡水區',
			'汐止區',
			'瑞芳區',
			'貢寮區',
			'金山區',
			'萬里區',
			'平溪區',
			'雙溪區',
			'八里區',
			'林口區',
			'深坑區',
			'石碇區',
			'坪林區',
			'三芝區',
			'石門區',
			'泰山區',
			'林口區',
			'五股區',
			'八里區',
			'蘆洲區',
			'三重區',
			'蘆洲區',
			'永和區',
			'中和區',
			'新店區',
			'深坑區',
			'石碇區',
		],
		桃園市: [
			'桃園區',
			'中壢區',
			'平鎮區',
			'八德區',
			'楊梅區',
			'蘆竹區',
			'龜山區',
			'大溪區',
			'大園區',
			'觀音區',
			'復興區',
		],
		台中市: [
			'中區',
			'東區',
			'南區',
			'西區',
			'北區',
			'北屯區',
			'西屯區',
			'南屯區',
			'太平區',
			'大里區',
			'霧峰區',
			'烏日區',
			'豐原區',
			'后里區',
			'石岡區',
			'東勢區',
			'和平區',
			'新社區',
			'潭子區',
			'大雅區',
			'神岡區',
			'大肚區',
			'沙鹿區',
			'龍井區',
			'梧棲區',
			'清水區',
			'大甲區',
			'外埔區',
			'大安區',
		],
		台南市: [
			'中西區',
			'東區',
			'南區',
			'北區',
			'安平區',
			'安南區',
			'永康區',
			'歸仁區',
			'新化區',
			'左鎮區',
			'玉井區',
			'楠西區',
			'南化區',
			'仁德區',
			'關廟區',
			'龍崎區',
			'官田區',
			'麻豆區',
			'佳里區',
			'西港區',
			'七股區',
			'將軍區',
			'學甲區',
			'北門區',
			'新營區',
			'後壁區',
			'白河區',
			'東山區',
			'六甲區',
			'下營區',
			'柳營區',
			'鹽水區',
			'善化區',
			'大內區',
			'山上區',
			'新市區',
			'安定區',
		],
		高雄市: [
			'楠梓區',
			'左營區',
			'鼓山區',
			'三民區',
			'鹽埕區',
			'前金區',
			'新興區',
			'苓雅區',
			'前鎮區',
			'旗津區',
			'小港區',
			'鳳山區',
			'大寮區',
			'鳥松區',
			'林園區',
			'仁武區',
			'大社區',
			'岡山區',
			'路竹區',
			'阿蓮區',
			'田寮區',
			'燕巢區',
			'橋頭區',
			'梓官區',
			'彌陀區',
			'永安區',
			'湖內區',
			'旗山區',
			'美濃區',
			'內門區',
			'杉林區',
			'甲仙區',
			'六龜區',
			'茂林區',
			'桃源區',
			'那瑪夏區',
		],
		基隆市: ['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'],
		新竹市: ['東區', '北區', '香山區'],
		新竹縣: [
			'竹北市',
			'湖口鄉',
			'新豐鄉',
			'新埔鎮',
			'關西鎮',
			'芎林鄉',
			'寶山鄉',
			'竹東鎮',
			'五峰鄉',
			'橫山鄉',
			'尖石鄉',
			'北埔鄉',
			'峨眉鄉',
		],
		宜蘭縣: [
			'宜蘭市',
			'頭城鎮',
			'礁溪鄉',
			'壯圍鄉',
			'員山鄉',
			'羅東鎮',
			'冬山鄉',
			'五結鄉',
			'三星鄉',
			'大同鄉',
			'蘇澳鎮',
			'南澳鄉',
		],
		花蓮縣: [
			'花蓮市',
			'新城鄉',
			'秀林鄉',
			'吉安鄉',
			'壽豐鄉',
			'鳳林鎮',
			'光復鄉',
			'豐濱鄉',
			'瑞穗鄉',
			'萬榮鄉',
			'玉里鎮',
			'卓溪鄉',
			'富里鄉',
		],
		台東縣: [
			'臺東市',
			'綠島鄉',
			'蘭嶼鄉',
			'延平鄉',
			'卑南鄉',
			'鹿野鄉',
			'關山鎮',
			'海端鄉',
			'池上鄉',
			'東河鄉',
			'成功鎮',
			'長濱鄉',
			'太麻里鄉',
			'金峰鄉',
			'大武鄉',
			'達仁鄉',
		],
		南投縣: [
			'南投市',
			'中寮鄉',
			'草屯鎮',
			'國姓鄉',
			'埔里鎮',
			'仁愛鄉',
			'名間鄉',
			'集集鎮',
			'水里鄉',
			'魚池鄉',
			'信義鄉',
			'竹山鎮',
			'鹿谷鄉',
		],
		苗栗縣: [
			'苗栗市',
			'苑裡鎮',
			'通霄鎮',
			'竹南鎮',
			'頭份市',
			'後龍鎮',
			'卓蘭鎮',
			'大湖鄉',
			'公館鄉',
			'銅鑼鄉',
			'南庄鄉',
			'頭屋鄉',
			'三義鄉',
			'西湖鄉',
			'造橋鄉',
			'三灣鄉',
			'獅潭鄉',
			'泰安鄉',
		],
		彰化縣: [
			'彰化市',
			'芬園鄉',
			'花壇鄉',
			'秀水鄉',
			'鹿港鎮',
			'福興鄉',
			'線西鄉',
			'和美鎮',
			'伸港鄉',
			'員林市',
			'社頭鄉',
			'永靖鄉',
			'埔心鄉',
			'溪湖鎮',
			'大村鄉',
			'埔鹽鄉',
			'田中鎮',
			'北斗鎮',
			'田尾鄉',
			'埤頭鄉',
			'溪州鄉',
			'竹塘鄉',
			'二林鎮',
			'大城鄉',
			'芳苑鄉',
			'二水鄉',
		],
		嘉義市: ['東區', '西區'],
		嘉義縣: [
			'番路鄉',
			'梅山鄉',
			'竹崎鄉',
			'阿里山鄉',
			'中埔鄉',
			'大埔鄉',
			'水上鄉',
			'鹿草鄉',
			'太保市',
			'朴子市',
			'東石鄉',
			'六腳鄉',
			'新港鄉',
			'民雄鄉',
			'大林鎮',
			'義竹鄉',
			'布袋鎮',
		],
		屏東縣: [
			'屏東市',
			'三地門鄉',
			'霧台鄉',
			'瑪家鄉',
			'九如鄉',
			'里港鄉',
			'高樹鄉',
			'鹽埔鄉',
			'長治鄉',
			'麟洛鄉',
			'竹田鄉',
			'內埔鄉',
			'萬丹鄉',
			'潮州鎮',
			'泰武鄉',
			'來義鄉',
			'萬巒鄉',
			'崁頂鄉',
			'新埤鄉',
			'南州鄉',
			'林邊鄉',
			'東港鎮',
			'琉球鄉',
			'佳冬鄉',
			'枋寮鄉',
			'枋山鄉',
			'春日鄉',
			'獅子鄉',
			'車城鄉',
			'牡丹鄉',
			'恆春鎮',
			'滿州鄉',
		],
		澎湖縣: ['馬公市', '西嶼鄉', '望安鄉', '七美鄉', '白沙鄉', '湖西鄉'],
		金門縣: ['金沙鎮', '金湖鎮', '金寧鄉', '金城鎮', '烈嶼鄉', '烏坵鄉'],
		連江縣: ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'],
	}

	const [districtOptions, setDistrictOptions] = useState(cityDistrictMap['台北市'])

	const onSubmit = data => {
		console.log('表單資料：', data)
	}

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
					<div className="bg-gray-50 rounded-4 p-6 mb-6">
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
										required: '請輸入姓名',
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
										required: '請輸入收件人電話',
										minLength: { value: 8, message: '電話至少 8 碼' },
										pattern: {
											value: /^\d+$/,
											message: '電話僅能輸入數字',
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
									required: '請輸入 Email',
									pattern: {
										value: /^\S+@\S+$/i,
										message: 'Email 格式不正確',
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
															{Object.keys(cityDistrictMap).map(city => (
																<li key={city}>
																	<button
																		type="button"
																		className={`dropdown-item ${field.value === city ? 'active' : ''}`}
																		onClick={() => {
																			field.onChange(city)
																			setDistrictOptions(cityDistrictMap[city])
																			setValue('district', '')
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
														{districtOptions.map(d => (
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
								<div className="mb-4">
									<label htmlFor="postalCode" className="form-label">
										郵遞區號
									</label>
									<input
										type="text"
										className="form-control"
										id="postalCode"
										defaultValue="106"
										{...register('postalCode', {
											required: '請輸入郵遞區號',
											pattern: {
												value: /^\d+$/,
												message: '郵遞區號只能是數字',
											},
										})}
									/>
									{errors.postalCode && <p className="text-danger">{errors.postalCode.message}</p>}
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
							<button className="btn btn-primary-300 text-white text-nowrap fw-bold px-6">
								使用
							</button>
						</div>
					</div>
					<div className="bg-gray-50 rounded-4 p-6">
						<h2 className="h4 mb-4 text-primary-400">付款金額</h2>
						<div className="d-flex justify-content-between pb-2">
							<p>商品金額</p>
							<p className="fw-bold">NT$ {currency(cart.finalTotal)}</p>
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
							<p className="h3 text-secondary-300">NT$ {currency(finalTotal)}</p>
						</div>
						<div>
							<button
								type="submit"
								className="btn btn-primary-300 text-white w-100 fw-bold"
								disabled={!isValid || isCartEmpty}
							>
								前往付款
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default FormSection
