import React from "react"

function ReferralListItem({ referral }) {
	return (
		<tr key={referral.name} className="">
			<td key={referral.profilePicture}>
				<img className="avatar" src={referral.profilePicture} alt="Profile" />
			</td>
			<td key={referral.name}>{referral.name}</td>
			<td key={referral.email}>{referral.email}</td>
			<td key={referral.referralCode}>{referral.referralCode}</td>
			<td key={referral.claimedAt}>{referral.claimedAt}</td>
		</tr>
	)
}

export default ReferralListItem
