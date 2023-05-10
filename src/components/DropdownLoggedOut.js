import { Link } from "react-router-dom";

export const DropdownLoggedOut = ({handleLink}) => {

	return (
		<div
			id="dropdown"
			className="-z-10 p-5 absolute top-[100%] right-0 w-full  bg-black/[.80] divide-y divide-gray-100 rounded-lg shadow border-2">
			<ul
				className="py-2 text-2xl text-white"
				aria-labelledby="dropdownDefaultButton">
				<li>
					<Link
						to="/signin"
						className="transition-all duration-300 block px-4 py-3 hover:bg-white hover:text-black hover:rounded-lg "
						onClick={handleLink}>
						Zaloguj
					</Link>
				</li>
				<li>
					<Link
						to="/signup"
						className="transition-all duration-300 block px-4 py-3 mt-3 hover:bg-white hover:text-black hover:rounded-lg"
						onClick={handleLink}>
						Zarejestruj
					</Link>
				</li>
			</ul>
		</div>
	);
};
