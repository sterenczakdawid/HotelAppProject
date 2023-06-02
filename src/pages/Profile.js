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
		<div className="h-screen bg-white">
			<header>
				<div
					className={`flex items-center justify-center flex-col bg-white h-[400px] bg-profile-lol bg-cover bg-no-repeat bg-center relative z-0 text-white`}>
					<div className="absolute w-full h-full bg-black/[.80] -z-10" />
					<div className="flex flex-col content-center items-center z-5">
						<h1 className="p-10 text-7xl font-['Dancing_Script']">
							Mój profil
						</h1>
					</div>
				</div>
			</header>

			<div className="pt-10 bg-white">
				<h2 className="text-4xl">Witaj {auth.currentUser.displayName}!</h2>
				<div className="bg-white flex flex-col items-center justify-center">
					<main>
						{isAdmin.adminLoggedIn && (
							<Link to="/addroom">
								<p className="rounded-lg border border-black px-7 py-3 m-3 mb-7 hover:bg-black hover:text-white transition duration-300">
									Dodaj nowy pokój do listy pokoi
								</p>
							</Link>
						)}

						<button
							type="button"
							className="rounded-lg border border-black px-7 py-3 m-3 mb-7 hover:bg-black hover:text-white transition duration-300"
							onClick={handleLogout}>
							Wyloguj
						</button>
					</main>
				</div>
			</div>
		</div>
	);
};
