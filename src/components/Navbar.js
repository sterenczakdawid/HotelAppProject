import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

// import "./navbar2.css";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hidden, setHidden] = useState(true);

	const activeClass =
		"nav-item block text-blue-700 mt-3 p-5 text-3xl font-normal";
	const inactiveClass = "nav-item block mt-3 p-5 text-3xl font-normal";

	return (
		<nav className="navbar fixed top-0 w-full text-white">
			<div className="wrapper flex flex-wrap items-center justify-between mx-auto my-0 max-w-screen-xl">
				<Link className="logo text-6xl font-semibold p-5" to="/">
					<i className="fa-solid fa-spa mr-3" />
					<span className="self-center text-5xl whitespace-nowrap">
						VCHotel
					</span>
				</Link>

				<button
					data-collapse-toggle="navbar-solid-bg"
					className="p-5 rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
					onClick={() => setHidden(!hidden)}>
					<Hamburger toggled={isOpen} toggle={setIsOpen} direction="left" />
				</button>

				<div
					className={`${
						hidden ? "hidden" : ""
					} navbar-nav w-full md:block md:w-auto`}
					id="navbar-solid-bg">
					<div className="flex flex-col md:flex-row">
						<NavLink
							className={({ isActive }) =>
								isActive ? activeClass : inactiveClass
							}
							to="/">
							<i className=" px-2 fa-solid fa-house-user" />
							Home
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? activeClass : inactiveClass
							}>
							<i className=" px-2 fa-solid fa-address-book" />
							Contact
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? activeClass : inactiveClass
							}
							to="/rooms">
							<i className="px-2 fa-solid fa-bed" />
							Rooms
						</NavLink>
						<button className="one"/*{inactiveClass}*/>Login</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
