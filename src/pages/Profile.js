import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuthStatus } from "../hooks/useAuthStatus";

export const Profile = () => {
	const isAdmin = useAuthStatus();
	const navigate = useNavigate();

	const handleLogout = () => {
		auth.signOut();
		navigate("/");
		localStorage.setItem("isAuth", false);
	};

	return (
		<div className="profile h-screen">
			<header className="profileHeader">
				<p className="pageHeader mt-40">Witaj {auth.currentUser.displayName}</p>
			</header>
			<main>
				<button type="button" className="logOut mt-40" onClick={handleLogout}>
					Wyloguj
				</button>

				{isAdmin.adminLoggedIn && (
					<Link to="/addroom">
						<p>Dodaj nowy pokój do listy pokoi</p>
					</Link>
				)}
			</main>
		</div>
	);
};
