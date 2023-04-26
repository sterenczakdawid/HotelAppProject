import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const { name, email, password } = formData;

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
							type="text"
							className="nameInput"
							placeholder="name"
							id="name"
							value={name}
							onChange={onChange}
						/>
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

						<Link to="/signin">
							<p>Already a user?</p>
						</Link>

						<div className="signUpBar">
							<p className="signUpText">Sign In!</p>
							<button className="singUpButton">ikonka here</button>
						</div>
					</form>
				</main>
			</div>
		</>
	);
};
