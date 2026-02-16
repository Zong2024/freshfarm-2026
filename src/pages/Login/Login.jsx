import { useAuth } from '@/contexts/AuthContext'
import Toast from '@/utils/toast'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' })

	const { login } = useAuth()
	const navigate = useNavigate()

	const onSubmit = async data => {
		console.log('表單送出:', data)
		const res = await login(data)
		if (res.success) {
			Toast.fire({
				icon: 'success',
				title: '登入成功',
			})
			navigate('/products')
		}
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
									<label htmlFor="username" className="form-label">
										Username
									</label>

									<input
										type="text"
										className={clsx('form-control', { 'is-invalid': errors.username })}
										id="username"
										placeholder="name@example.com"
										{...register('username', {
											required: 'username 為必填',
										})}
									/>
									{errors.username && (
										<div className="invalid-feedback">{errors.username.message}</div>
									)}
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
