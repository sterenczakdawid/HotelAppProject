import { useState, useEffect } from "react";
// import { updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
// import { updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

export const Profile = () => {
	const [formData, setformData] = useState({
		name: auth.currentUser.displayName,
		email: auth.currentUser.email,
	});

	// const { name, email } = formData;
	const navigate = useNavigate();

	const handleLogout = () => {
		auth.signOut();
		navigate("/");
		localStorage.setItem("isAuth", false);
	};

	const onSubmit = () => {
		console.log("123");
	};

	return (
		<div className="profile h-screen">
			<header className="profileHeader">
				<p className="pageHeader mt-40">Witaj {auth.currentUser.displayName}</p>
				<button type="button" className="logOut mt-40" onClick={handleLogout}>
					Wyloguj
				</button>
			</header>
		</div>
	);
};
