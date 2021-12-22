import axios from "axios"
import React, { useState } from "react"
import WaitingListItem from "./WaitingListItem"

export default function WaitingRoom() {
	const [code, setReferralCode] = useState({})
	const [success, setSuccess] = useState("")
	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const waitingList = [
		{
			name: "Michael Amiro",
			email: "mail@mailinator.com",
		},
		{
			name: "John Doe",
			email: "mailing@mailinator.com",
		},
		{
			name: "Jane Dow",
			email: "mailer@mailinator.com",
		},
	]
	function handleReferralCodeChange(event) {
		setReferralCode((prevState) => {
			return { ...prevState, referral_code: event.target.value }
		})
	}
	async function handleSubmit(event) {
		event.preventDefault()
		setIsLoading(true)

		axios
			.post(process.env.REACT_APP_API_BASE + "/redeem_referral", code)
			.then((response) => {
				console.log(response)
				if (response.status >= 200 && response.status < 300) {
					setSuccess("Successfully redeemed code " + code.referral_code)
				} else {
					setError("Unfortuantely the code does not seem to exist.")
				}
				setIsLoading(false)
			})
			.catch((error) => {
				console.log(error)
				setError("Unfortuantely the code does not seem to exist")
				setIsLoading(false)
			})
	}
	return (
		<div className="row">
			<div className="col-md-4">
				<div className="card my-5">
					<div className="card-body">
						<h2>Redeem Referral</h2>
						{error && !success && (
							<div className="alert alert-danger" role="alert">
								{error}
							</div>
						)}
						{success && error && (
							<div className="alert alert-success" role="alert">
								{success}
							</div>
						)}
						<form>
							<div className="form-group mb-3">
								<label htmlFor="username">Enter Referral Code</label>
								<input type="text" className="form-control" onChange={handleReferralCodeChange} />
							</div>
							<div className="d-grid">
								<input type="submit" className="btn btn-primary" value={isLoading ? "Redeeming..." : "Redeem"} onClick={handleSubmit} />
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="col-md-8">
				<div className="card my-5">
					<div className="card-body">
						<h2>Waiting List</h2>
						<table className="table">
							<thead>
								<tr>
									<th>Full Name</th>
									<th>Email Address</th>
								</tr>
							</thead>
							<tbody>
								{waitingList.map((user) => (
									<WaitingListItem key={user.name} user={user} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
