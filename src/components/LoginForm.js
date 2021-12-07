import React, { useState } from "react"
import axios from "axios"

export default function LoginForm() {
	const [setToken] = useState()
	const [setError] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	function handleSignIn(event) {
		event.preventDefault()
		console.log(username, password)
		const user = {
			username: username,
			password: password,
		}
		console.log(user)
		axios
			.post(process.env.REACT_APP_API_BASE + "/login", user)
			.then((response) => {
				console.log(response)
				if (response.status >= 200 && response.status < 300) {
					setToken(response)
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
						<form onSubmit={handleSignIn}>
							<div className="form-group mb-3">
								<label htmlFor="username">Username</label>
								<input type="text" className="form-control" onChange={(event) => setUsername(event.target.value)} />
							</div>
							<div className="form-group mb-3">
								<label htmlFor="password">Password</label>
								<input type="password" className="form-control" onChange={(event) => setPassword(event.target.value)} />
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
