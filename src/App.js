import "./App.css"
import React, { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import ClaimedReferrals from "./components/ClaimedReferrals"
import LoginForm from "./components/LoginForm"
import WaitingRoom from "./components/WaitingRoom"

function App() {
	const [token] = useState()
	return (
		<div className="container">
			<div className="row">
				<div className="d-flex">
					<Link to="/claimed-referrals">Claimed Referrals</Link>
					<Link to="/waiting-room">Waiting Room</Link>
				</div>
			</div>
			<Routes>
				<Route path="/" element={<LoginForm />} />
				<Route path="/waiting-room" element={<WaitingRoom />} />
				<Route path="/claimed-referrals" element={<ClaimedReferrals />} />
			</Routes>
		</div>
	)
}

export default App
