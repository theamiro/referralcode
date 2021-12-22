import "./App.css"
import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import ClaimedReferrals from "./components/ClaimedReferrals"
import LoginForm from "./components/LoginForm"
import WaitingRoom from "./components/WaitingRoom"
import Navbar from "./components/Navbar"
import { UserContext } from "./UserContext"

function App() {
	const [token, setToken] = useState(null)
	return (
		<div className="min-vh-100">
			<UserContext.Provider value={{ token, setToken }}>
				{token && <Navbar />}
				{/* This can be improved using react-router-dom Private Routes */}
				<div className="container">
					<Routes>
						{token ? (
							<>
								<Route path="/waiting-room" element={<WaitingRoom />} />
								<Route path="/claimed-referrals" element={<ClaimedReferrals />} />
							</>
						) : (
							<Route path="/" exact element={<LoginForm />} />
						)}
					</Routes>
				</div>
			</UserContext.Provider>
		</div>
	)
}

export default App
