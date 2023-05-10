import { Link } from "react-router-dom";
// import heroBig from "../../assets/images/hero-big.jpg";
import "./hero.css";
import "../../assets/animations/bounce.css";

export const Hero = () => {
	const handleBouncyThing = () => {
		window.scrollTo(0, 650);
	};

	return (
		<>
			<header>
				<div className="hero-img">
					<div className="hero-shadow"></div>
					<div className="hero-text">
						<h1>Jakiś fancy nagłówek</h1>
						<p>Jeszcze bardziej fancy paragraf</p>
						<Link
							to="/rooms"
							type="button"
							className="block mt-10 ml-2 p-5 text-2xl font-normal rounded-lg border-2 border-white hover:bg-white hover:text-black transition duration-300 px-5 py-2.5 text-center mr-2 mb-2">
							Sprawdź ofertę
						</Link>
					</div>
					<div
						className="flex items-center justify-center cursor-pointer"
						onClick={handleBouncyThing}>
						<i className="fas fa-chevron-down p-5 bounce-top"></i>
					</div>
				</div>
			</header>
		</>
	);
};
