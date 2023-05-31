import { Link } from "react-router-dom";

export const PageNotFound = () => {
	return (
		<div className="flex items-center justify-center flex-col h-screen bg-page-not-found bg-cover bg-no-repeat bg-center relative z-0 text-white">
			<div className="absolute w-full h-full bg-black/[.70] -z-10" />
			<div className="bg-black/[.60] border rounded-lg p-10">
				<p className="uppercase text-5xl">Błąd 404</p>
				<p className="mb-20 mt-5">Nie znaleziono strony</p>
				<Link
					to="/"
					className="border rounded-lg p-3 hover:bg-white hover:text-black transition duration-300">
					Powrót do strony głównej
				</Link>
			</div>
		</div>
	);
};
