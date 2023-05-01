import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
		<>
			<div className="pageContainer">
				<header>
					<p className="text-2xl text-black mt-40">Welcome Back!</p>
				</header>

				<main>
					<form onSubmit={onSubmit}>
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

						<Link to="/signup">
							<p>Dont have the account??</p>
						</Link>

						<div className="signInBar">
							<p className="signInText">Sign In!</p>
							<button className="singInButton">ikonka here</button>
						</div>
					</form>
				</main>
			</div>
		</>
	);
};
