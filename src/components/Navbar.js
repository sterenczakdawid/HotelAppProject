import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
	<div className = "navbar">
		<Link className = "logo" to="/">
			{/* <img src="" alt="" /> */}
			<span>BigDickHotel</span>
		</Link>
		<nav className = "nav">
			<NavLink className = "nav-item" to = "/"><i class="fa-solid fa-house-user"/>Home</NavLink>
			<NavLink className = "nav-item" to = "/contact">Contact</NavLink>
			<button className = "btn">Login</button>
		</nav>
	</div>
	);
};
