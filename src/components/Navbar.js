import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
	<div className = "navbar">
		<Link to="/">
			<img src="" alt="" />
			<span>Hotel</span>
		</Link>
		<nav>
			<Link className = "nav-item" to = "/">Home</Link>
			<Link className = "nav-item" to = "/contact">Contact</Link>
			<button className = "btn">Login</button>
		</nav>
	</div>
	);
};
