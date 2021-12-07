import "./App.css"
import ClaimedReferrals from "./components/ClaimedReferrals"
import LoginForm from "./components/LoginForm"
import WaitingRoom from "./components/WaitingRoom"

function App() {
	return (
		<div className="container">
			<LoginForm />
			<WaitingRoom />
			<ClaimedReferrals />
		</div>
	)
}

export default App
