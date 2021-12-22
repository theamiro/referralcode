import React, { useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"

export default function LoginForm() {
	const { token, setToken } = useContext(UserContext)
	const [error, setError] = useState("")
	const [user, setUser] = useState({ username: "", password: "" })
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()

	function handleUsernameChange(event) {
		setUser((prevState) => {
			return { ...prevState, username: event.target.value }
		})
	}

	function handlePasswordChange(event) {
		setUser((prevState) => {
			return { ...prevState, password: event.target.value }
		})
	}

	async function handleSignIn(event) {
		event.preventDefault()
		setIsLoading(true)
		await axios
			.post(process.env.REACT_APP_API_BASE + "/login", user)
			.then((response) => {
				if (response.status >= 200 && response.status < 300) {
					setToken(process.env.REACT_APP_DUMMY_TOKEN)
					setIsLoading(false)
					navigate("/waiting-room", { replace: true })
				} else {
					console.log("eorrroror")
					setError("Wrong username/password combination")
					setIsLoading(false)
				}
			})
			.catch((error) => {
				setError(error.message)
				setIsLoading(false)
			})
	}

	return (
		<div className="row justify-content-center align-items-center">
			<div className="col-md-4">
				<div className="card py-5">
					<div className="card-body">
						<h2>Sign in</h2>
						{error && (
							<div className="alert alert-danger" role="alert">
								{error}
							</div>
						)}
						{token}
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
								<input type="submit" className="btn btn-primary btn-lg" value={isLoading ? "Signing in..." : "Sign in"} />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
