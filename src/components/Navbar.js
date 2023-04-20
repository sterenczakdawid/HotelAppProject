import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navbar">
			<Link className="logo" to="/">
				{/* <img src="" alt="" /> */}
				<span>VeryCoolHotel</span>
			</Link>

			<div className="nav-mobile">
				<i className="fas fa-bars" />
				<i className="fas fa-times" />
			</div>

			<nav className="nav">
				<NavLink className="nav-item" to="/">
					<i className="fa-solid fa-house-user" />
					Home
				</NavLink>
				<NavLink className="nav-item" to="/contact">
					<i className="fa-solid fa-address-book" />
					Contact
				</NavLink>
				<NavLink className="nav-item" to="/rooms">
					<i className="fa-solid fa-bed" />
					Rooms
				</NavLink>
				<button className="btn nav-item">Login</button>
			</nav>
		</div>
	);
};
