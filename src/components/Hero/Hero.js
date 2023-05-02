import { Link } from "react-router-dom";
// import heroBig from "../../assets/images/hero-big.jpg";
import "./hero.css";
import "../../assets/animations/bounce.css";

export const Hero = () => {
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
							className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-5">
							Sprawdź ofertę!
						</Link>
					</div>
					<a className = "flex items-center justify-center" href="#aboutus">
						<i className="fas fa-chevron-down p-5 bounce-top"></i>
					</a>
				</div>
			</header>
		</>
	);
};
