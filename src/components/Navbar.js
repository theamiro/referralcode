import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"

function Navbar() {
	const navigate = useNavigate()
	const { token, setToken } = useContext(UserContext)

	function logout(event) {
		event.preventDefault()
		setToken(null)
		navigate("/", { replace: true })
	}
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-white">
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
					</ul>
					<ul className="navbar-nav ms-auto">
						{token && (
							<li className="nav-item">
								<a href="/" className="nav-link" onClick={logout}>
									Logout
								</a>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
