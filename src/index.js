import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"

import App from "./App"

const element = (
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
)
const container = document.getElementById("root")
ReactDOM.render(element, container)
