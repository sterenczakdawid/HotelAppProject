import { Link } from "react-router-dom";
// import { useState } from "react";
// import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { updateDoc } from "firebase/firestore";
import { auth } from "../firebase/config";

export const Profile = () => {
	// const [formData, setformData] = useState({
	// 	name: auth.currentUser.displayName,
	// 	email: auth.currentUser.email,
	// });

	// const { name, email } = formData;
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

				<Link to="/addroom">
					<p>Dodaj nowy pokój do listy pokoi</p>
				</Link>
			</main>
		</div>
	);
};
