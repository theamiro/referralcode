import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {
	const [token, setToken] = useState("")
	const [error, setError] = useState("")
	const [user, setUser] = useState({ username: "", password: "" })
	const navigate = useNavigate()

	function handleUsernameChange(event) {
		setUser((prevState) => {
			return { ...prevState, username: event.target.value }
		})
		console.log(user)
	}

	function handlePasswordChange(event) {
		setUser((prevState) => {
			return { ...prevState, password: event.target.value }
		})
		console.log(user)
	}

	async function handleSignIn(event) {
		event.preventDefault()
		console.log(user)
		await axios
			.post(process.env.REACT_APP_API_BASE + "/login", user)
			.then((response) => {
				console.log(response)
				if (response.status >= 200 && response.status < 300) {
					setToken(response)
					navigate("/waiting-room", { replace: true })
				} else {
					setError("Wrong username/password combination")
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div className="row justify-content-center align-items-center">
			<div className="col-md-4">
				<div className="card py-5">
					<div className="card-body">
						<h2>Sign in</h2>
						<div className="alert alert-secondary" role="alert">
							{error}
						</div>
						<form onSubmit={handleSignIn}>
							<div className="form-group mb-3">
								<label htmlFor="username">Username</label>
								<input type="text" className="form-control" onChange={handleUsernameChange} />
							</div>
							<div className="form-group mb-3">
								<label htmlFor="password">Password</label>
								<input type="password" className="form-control" onChange={handlePasswordChange} />
							</div>
							<div className="d-grid">
								<input type="submit" className="btn btn-primary" value="Sign in" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
