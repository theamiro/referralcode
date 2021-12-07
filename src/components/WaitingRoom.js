import React from "react"

export default function WaitingRoom() {
	return (
		<div className="row">
			<div className="col-md-4">
				<div className="card py-5">
					<div className="card-body">
						<h2>Enter Referral Code</h2>
						<form>
							<div className="form-group mb-3">
								<label htmlFor="username">Enter Referral Code</label>
								<input type="text" className="form-control" />
							</div>
							<div className="d-grid">
								<input type="submit" className="btn btn-primary" value="Send" />
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="col-md-8">
				<h2>Waiting List</h2>
				<table className="table table-light">
					<thead>
						<tr>
							<th>Profile Picture</th>
							<th>Full Name</th>
							<th>Email Address</th>
							<th>Referral Code</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<img className="avatar" src="https://picsum.photos/200" alt="Profile" />
							</td>
							<td>Michael Amiro</td>
							<td>email@address.com</td>
							<td>Referral Code</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
