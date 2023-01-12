import React from "react"
import ReactDOM from "react-dom"
import Fact from "./components/Facts";
import './index.css'

function App() {
	return (
		<div>
			<Fact />
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById("root"))