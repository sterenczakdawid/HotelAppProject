import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hidden, setHidden] = useState(true);

	const activeClass = "nav-item block mt-2 p-5 text-3xl font-normal underline";
	const inactiveClass =
		"nav-item block mt-2 p-5 text-3xl font-normal hover:underline";

	const [scroll, setScroll] = useState();

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY);
		});
	}, []);

	const handleLink = () => {
		setHidden(true);
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={`${
				hidden ? (scroll >= 150 ? "bg-black/[.80]" : "") : "bg-black/[.80]"
			} navbar fixed top-0 w-full text-white z-10 transition duration-500`}>
			<div className="wrapper flex flex-wrap items-center justify-between mx-auto my-0 max-w-screen-xl p-5">
				<Link className="logo text-4xl md:text-5xl font-semibold p-5" to="/">
					<i className="fa-solid fa-spa mr-3" />
					<span className="self-center whitespace-nowrap">VCHotel</span>
				</Link>

				<button
					data-collapse-toggle="navbar-solid-bg"
					className="md:hidden bg-transparent outline-none border-transparent" /*"p-2 rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"*/
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
							to="/"
							onClick={handleLink}>
							<i className=" px-2 fa-solid fa-house-user" />
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? activeClass : inactiveClass
							}
							to="/rooms"
							onClick={handleLink}>
							<i className="px-2 fa-solid fa-bed" />
							Pokoje
						</NavLink>
						<NavLink
							to="/contact"
							onClick={handleLink}
							className={({ isActive }) =>
								isActive ? activeClass : inactiveClass
							}>
							<i className=" px-2 fa-solid fa-address-book" />
							Kontakt
						</NavLink>
						<Link to = "/signin"><button className="block mt-1 ml-2 p-5 text-2xl font-normal rounded-full border-2 border-white hover:bg-white hover:text-black transition duration-300">Logowanie</button></Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
