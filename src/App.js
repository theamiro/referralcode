import "./App.css"
import React, { useState } from "react"
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import ClaimedReferrals from "./components/ClaimedReferrals"
import LoginForm from "./components/LoginForm"
import WaitingRoom from "./components/WaitingRoom"

function App() {
	const [token, setToken] = useState()
	const navigate = useNavigate()

	function logout(event) {
		event.preventDefault()
		setToken(null)
		navigate("/", { replace: true })
	}
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/claimed-referrals">
								Claimed Referrals
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/waiting-room">
								Waiting Room
							</Link>
						</li>
						{!token && (
							<li className="nav-item">
								<button className="btn btn-primary" onClick={logout}>
									Logout
								</button>
							</li>
						)}
					</ul>
				</div>
			</nav>
			<div className="container">
				<Routes>
					<Route path="/" element={<LoginForm />} />
					<Route path="/waiting-room" element={<WaitingRoom />} />
					<Route path="/claimed-referrals" element={<ClaimedReferrals />} />
				</Routes>
			</div>
		</>
	)
}

export default App
