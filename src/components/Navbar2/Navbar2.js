import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

import "./navbar2.css";

export const Navbar2 = () => {
	const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(true);

  const activeClass = "nav-item block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
  const inactiveClass = "nav-item block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"

	return (
		<nav className="navbar fixed top-0 w-full h-80">
			<div className="wrapper flex flex-wrap items-center justify-between mx-auto p-4">
				<Link className="logo" to="/">
					<i className="fa-solid fa-spa h-8 mr-2" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap">
						VCHotel
					</span>
				</Link>

				<button
					data-collapse-toggle="navbar-solid-bg"
					className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick = {() => setHidden(!hidden)}>
					<Hamburger toggled={isOpen} toggle={setIsOpen} direction="left" />
				</button>

				<div
					className={`${hidden ? "hidden" : ""} navbar-nav w-full md:block md:w-auto`}
					id="navbar-solid-bg">
					<div className = "flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
						<NavLink className={({isActive}) => isActive ? activeClass : inactiveClass} to="/">
							<i className="fa-solid fa-house-user" />
							Home
						</NavLink>
						<NavLink to="/contact" className={({isActive}) => isActive ? activeClass : inactiveClass}>
							<i className="fa-solid fa-address-book" />
							Contact
						</NavLink>
						<NavLink className={({isActive}) => isActive ? activeClass : inactiveClass} to="/rooms">
							<i className="fa-solid fa-bed" />
							Rooms
						</NavLink>
						<button className="login-btn nav-item">Login</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

{
	/* <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
    </button>

    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
    
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */
}
