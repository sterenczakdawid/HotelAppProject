import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config"
// import { create } from "json-server";

export const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const { name, email, password } = formData;
	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log("done!");

		try {
			const auth = getAuth();
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			updateProfile(auth.currentUser, {
				displayName: name,
			});

			const formDataCopy = { ...formData };
			delete formDataCopy.password;
			formDataCopy.timestamp = serverTimestamp();

			await setDoc(doc(db, 'users', user.uid), formDataCopy);

			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="pageContainer">
				<header>
					<p className="text-2xl text-black mt-40">
						Welcome! We're happy youre here!
					</p>
				</header>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="nameInput"
						placeholder="name"
						id="name"
						value={name}
						onChange={onChange}
						autoComplete="off"
					/>
					<input
						type="email"
						className="emailInput"
						placeholder="email"
						id="email"
						value={email}
						onChange={onChange}
						autoComplete="off"
					/>

					<div className="passwordInputDiv">
						<input
							type={showPassword ? "text" : "password"}
							className="passwordInput"
							placeholder="password"
							id="password"
							value={password}
							onChange={onChange}
							autoComplete="off"
						/>
					</div>

					<Link to="/signin">
						<p>Already a user?</p>
					</Link>

					{/* <div className="signUpBar">
						<p className="signUpText">Sign In!</p>
					</div> */}
					<button className="singUpButton" type="submit">
						ikonka here
					</button>
				</form>
			</div>
		</>
	);
};
