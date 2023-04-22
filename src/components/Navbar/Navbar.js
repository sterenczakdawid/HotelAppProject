import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import "./navbar.css";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleButton = () => {
		setIsOpen(!isOpen);
		// console.log(isOpen);
	};

	return (
		<div className="navbar">
				<Link
					className="logo"
					to="/">
					<i className="fa-solid fa-spa" />
					<span>VCHotel</span>
				</Link>

				<button className="toggle-btn" onClick={handleButton}>
					<i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
				</button>

			<nav className={isOpen ? "nav active" : "nav"}>
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
				<button className="login-btn nav-item">Login</button>
			</nav>
		</div>
	);
};
