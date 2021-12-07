import React, { useState, useEffect } from "react"
import axios from "axios"

export default function ClaimedReferrals() {
	const [claimedReferrals, setClaimedReferrals] = useState([])
	useEffect(() => {
		return () => {
			axios
				.get(process.env.REACT_APP_API_BASE + "/claimed_referrals")
				.then((response) => {
					console.log(response.data.data)
					setClaimedReferrals(response.data.data)
				})
				.catch((error) => console.error(error))
		}
	}, [])
	return (
		<div className="row">
			<div className="col-md-8">
				<table className="table table-light">
					<thead>
						<tr>
							<th>Profile Picture</th>
							<th>Full Name</th>
							<th>Email Address</th>
							<th>Referral Code</th>
							<th>Claimed at</th>
						</tr>
					</thead>
					<tbody>
						{claimedReferrals.map((referral) => (
							<tr key={referral.id}>
								<td>
									<img className="avatar" src={referral.profilePicture} alt="Profile" />
								</td>
								<td>{referral.name}</td>
								<td>{referral.email}</td>
								<td>{referral.referralCode}</td>
								<td>{referral.claimedAt}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
