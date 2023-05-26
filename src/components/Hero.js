import { Link } from "react-router-dom";
import "../assets/animations/bounce.css";

export const Hero = () => {
	const handleBouncyThing = () => {
		window.scrollTo(0, 650);
	};

	return (
		<>
			<header className="text-white">
				<div className="relative h-[100vh] bg-center bg-cover bg-fixed z-0 bg-hero-small xl:bg-hero-big">
					<div className="absolute w-full h-full bg-black/[.70] -z-10"></div>
					<div className="hero-text flex flex-col justify-center items-center h-full p-2.5 text-center z-5">
						<h1 className="text-[44px] md:text-[58px] xl:text-[66px] font-bold font-['Dancing_Script']">
							Witamy w VCHotel
						</h1>
						<p className="text-[14px] md:text-[16px] xl:text-[18px]">
							Twój komfort to nasz priorytet!
						</p>
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
						<i className="fas fa-chevron-down p-5 bounce-top absolute text-[30px] bottom-[20px]"></i>
					</div>
				</div>
			</header>
		</>
	);
};
