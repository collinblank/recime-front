import { useState } from "react"
import { useNavigate } from "react-router"
import OtherHeader from "../Header/OtherHeader"
import {HiOutlinePencilAlt} from 'react-icons/hi'
import './SignupForm.css'

function SignUpForm() {

	const navigate = useNavigate()

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`https://recime-backend.herokuapp.com/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		navigate(`/recime-front`)
	}

	return (
		<div className='background-spatula-gold'>
			<OtherHeader />
		<main>
			<h1 className='header'>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group sign-up-name">
						<label htmlFor="firstName">First Name</label>
						<input
							required
							value={user.firstName}
							onChange={e => setUser({ ...user, firstName: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
						/>
					</div>
					<div className="col-sm-6 form-group sign-up-last-name">
						<label htmlFor="lastName">Last Name</label>
						<input
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, lastName: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group sign-up-email">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							className="form-control"
							id="email"
							name="email"
						/>
					</div>
					<div className="col-sm-6 form-group sign-up-password">
						<label htmlFor="password">Password</label>
						<input
							type='password'
							required
							value={user.password}
							onChange={e => (setUser({ ...user, password: e.target.value }))}
							className='form-control'
							id='password'
							name='password'
						/>
					</div>
				</div>
				<button className="signup" type="submit"> <HiOutlinePencilAlt/></button>
			</form>
		</main>
		</div>
	)
}

export default SignUpForm