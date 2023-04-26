import { useState } from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	return (
		<>
			<div className="pageContainer">
				<header>
					<p className="text-2xl text-black mt-40">Welcome Back!</p>
				</header>

				<main>
					<form>
						<input
							type="email"
							className="emailInput"
							placeholder="email"
							id="email"
							value={email}
							onChange={onChange}
						/>

						<div className="passwordInputDiv">
							<input
								type={showPassword ? "text" : "password"}
								className="passwordInput"
								placeholder="password"
								id="password"
								value={password}
								onChange={onChange}
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
