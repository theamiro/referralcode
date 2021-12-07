import React, { useState } from "react"
import axios from "axios"

export default function LoginForm() {
	const user = useState()
	function handleSignIn() {
		axios
			.post(process.env.REACT_APP_API_BASE + "/login", {
				headers: {
					"Content-Type": "application/json",
				},
				data: JSON.stringify({ user }),
			})
			.then((response) => {
				console.log(response)
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
								<input type="text" className="form-control" />
							</div>
							<div className="form-group mb-3">
								<label htmlFor="password">Password</label>
								<input type="password" className="form-control" />
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
