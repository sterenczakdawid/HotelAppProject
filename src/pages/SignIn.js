import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LoginCard } from "../components";

export const SignIn = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;
	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const auth = getAuth();

			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			if (userCredential.user) {
				navigate("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex items-center justify-center flex-col bg-gray-200 h-screen bg-[url('https://cdn.pixabay.com/photo/2022/10/26/00/42/front-desk-7547105_960_720.jpg')] bg-cover bg-no-repeat bg-center relative z-0 text-white">
			<div className="absolute w-full h-full bg-black/[.70] -z-10" />
			<div className="w-1/4 min-w-[300px] h-1/2 min-h-[400px] bg-black/[.60] border rounded-lg">
				<header>
					<h2 className="p-10 text-6xl font-['Dancing_Script']">Zaloguj się</h2>
				</header>
				<div className="shadow">
					<form className="space-y-6" onSubmit={onSubmit}>
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
								type={showPassword ? "text" : "password"}
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
							Zaloguj się
						</button>

						<div>
							<p>Nie masz jeszcze konta? </p>
							<Link to="/signup">
								<span className="text-blue-700 hover:underline dark:text-blue-500">
									Zarejestruj się!
								</span>
							</Link>
						</div>
					</form>
					{/* <LoginCard /> */}
				</div>
			</div>
		</div>
	);
};
