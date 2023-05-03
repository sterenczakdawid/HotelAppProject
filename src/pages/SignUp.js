// import { create } from "json-server";
import { RegistrationCard } from "../components";

export const SignUp = () => {
	return (
		<div className="flex items-center justify-center flex-col bg-gray-200 h-screen bg-[url('https://cdn.pixabay.com/photo/2022/10/26/00/42/front-desk-7547105_960_720.jpg')] bg-cover bg-no-repeat bg-center relative z-0 text-white">
			<div className="absolute w-full h-full bg-black/[.70] -z-10" />
			<RegistrationCard />
		</div>
	);
};
