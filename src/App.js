import "./App.css"
import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ClaimedReferrals from "./components/ClaimedReferrals"
import LoginForm from "./components/LoginForm"
import WaitingRoom from "./components/WaitingRoom"

function App() {
	const [token] = useState()
	if (!token) {
		return <LoginForm />
	}
	return (
		<Router>
			<div className="container">
				<div className="row">
					<div class="d-flex">
						<Link to="/claimed-referrals">Claimed Referrals</Link>
						<Link to="/waiting-room">Waiting Room</Link>
					</div>
				</div>
				<Routes>
					<Route path="/waiting-room" element={<WaitingRoom />} />
					<Route path="/claimed-referrals" element={<ClaimedReferrals />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
