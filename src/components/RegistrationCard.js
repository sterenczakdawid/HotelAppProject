import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";

export const RegistrationCard = () => {
	// const [showPassword, setShowPassword] = useState(false);
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

	const handleSignUp = async (e) => {
		e.preventDefault();

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
			// delete formDataCopy.password;
			formDataCopy.timestamp = serverTimestamp();

			await setDoc(doc(db, "users", user.uid), formDataCopy);

			navigate("/");
			localStorage.setItem("isAuth", true);
		} catch (error) {
			// toast.error("Wystąpił błąd podczas rejestracji");
			toast.error(error.code);
		}
	};

	return (
		<div className="min-w-[300px] min-h-[450px] md:w-[400px] bg-black/[.60] border rounded-lg">
			<header>
				<h2 className="p-10 text-6xl font-['Dancing_Script']">
					Zarejestruj się
				</h2>
			</header>

			<form className="space-y-7" onSubmit={handleSignUp}>
				<div>
					<label htmlFor="name" className="block mb-2 text-2xl">
						Twoje imię
					</label>
					<input
						type="text"
						className="nameInput w-3/4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Imię"
						id="name"
						value={name}
						onChange={onChange}
						autoComplete="off"
					/>
				</div>
				<div>
					<label htmlFor="email" className="block mb-2 text-2xl">
						Twój email
					</label>
					<input
						type="email"
						className="emailInput w-3/4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="name@company.com"
						id="email"
						value={email}
						onChange={onChange}
						autoComplete="off"
					/>
				</div>

				<div className="passwordInputDiv">
					<label htmlFor="password" className="block mb-2 text-2xl">
						Twoje hasło
					</label>
					<input
						// type={showPassword ? "text" : "password"}
						type="password"
						className="passwordInput w-3/4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="•••••••"
						id="password"
						value={password}
						onChange={onChange}
						autoComplete="off"
					/>
					{/* <i className="fa-solid fa-eye-slash ml-3 cursor-pointer" /> */}
				</div>

				<button
					type="submit"
					className="w-2/4 text-white bg-transparent border rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-2xl px-5 py-2.5 text-center hover:bg-white hover:text-black transition duration-300">
					Zarejestruj się
				</button>

				<div>
					<p>Masz już konto? </p>
					<Link to="/signin">
						<span className="text-white font-bold hover:underline">
							Zaloguj się!
						</span>
					</Link>
				</div>
			</form>
		</div>
	);
};
