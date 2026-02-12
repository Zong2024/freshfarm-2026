import clsx from 'clsx'
import { useForm } from 'react-hook-form'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' })

	const onSubmit = data => {
		console.log('表單送出:', data)
	}

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-5">
					<div className="card shadow-sm">
						<div className="card-body p-4">
							<h2 className="text-center mb-4">會員登入</h2>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Email
									</label>

									<input
										type="email"
										className={clsx('form-control', { 'is-invalid': errors.email })}
										id="email"
										placeholder="name@example.com"
										{...register('email', {
											required: 'Email 為必填',
											pattern: {
												value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
												message: 'Email 格式錯誤',
											},
										})}
									/>
									{errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
								</div>

								<div className="mb-3">
									<label htmlFor="password" className="form-label">
										密碼
									</label>
									<input
										type="password"
										className={clsx('form-control', { 'is-invalid': errors.password })}
										id="password"
										{...register('password', {
											required: '密碼為必填',
											minLength: {
												value: 6,
												message: '密碼最少6碼',
											},
										})}
									/>
									{errors.password && (
										<div className="invalid-feedback">{errors.password.message}</div>
									)}
								</div>

								<button type="submit" className="btn btn-primary w-100">
									登入
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
