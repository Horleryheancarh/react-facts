import logo from "../images/react-icon-small.png"


export default function Header() {
	return (
		<nav>
			<img src={logo} className="nav--logo" alt="logo" />
			<h3 className="nav--logo_text">ReactFacts</h3>
			<h4 className="nav--title">React Course</h4>
		</nav>
	)
}