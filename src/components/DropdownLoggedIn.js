import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

export const DropdownLoggedIn = ({ handleLink }) => {
	const navigate = useNavigate();
	const handleLogout = () => {
		auth.signOut();
		navigate("/");
		localStorage.setItem("isAuth", false);
	};

	return (
		<div
			id="dropdown"
			className="-z-10 p-5 absolute top-[100%] right-0 w-full  bg-black/[.80] divide-y divide-gray-100 rounded-lg shadow border-2">
			<ul
				className="py-2 text-2xl text-white"
				aria-labelledby="dropdownDefaultButton">
				<li>
					<Link
						to="/profile"
						className="transition-all duration-300 block px-4 py-3 hover:bg-white hover:text-black hover:rounded-lg "
						onClick={handleLink}>
						Profil
					</Link>
				</li>
				<li
					className="transition-all duration-300 block px-4 py-3 mt-3 hover:bg-white hover:text-black hover:rounded-lg"
					onClick={handleLogout}>
					{" "}
					Wyloguj
				</li>
			</ul>
		</div>
	);
};
