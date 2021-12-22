import React, { useState, useEffect } from "react"
import axios from "axios"
import ReferralListItem from "./ReferralListItem"

export default function ClaimedReferrals() {
	const [claimedReferrals, setClaimedReferrals] = useState([])
	async function fetchClaimedReferrals() {
		await axios
			.get(process.env.REACT_APP_API_BASE + "/claimed_referrals")
			.then((response) => {
				setClaimedReferrals(response.data.data)
			})
			.catch((error) => console.error(error))
	}
	useEffect(() => {
		let isMounted = true
		fetchClaimedReferrals()
		return () => (isMounted = false)
	}, [])
	return (
		<div className="row">
			<div className="col-md-12">
				<div className="card my-5">
					<div className="card-body">
						<h2>Claimed Referrals</h2>
						<table className="table">
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
									<ReferralListItem referral={referral} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
