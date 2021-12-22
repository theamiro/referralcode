import React from "react"

function WaitingListItem({ user }) {
	return (
		<tr>
			<td>{user.name}</td>
			<td>{user.email}</td>
		</tr>
	)
}

export default WaitingListItem
