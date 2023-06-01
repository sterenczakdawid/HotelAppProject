import { useState } from "react";
import { ContactCard } from "../components";
import { toast } from "react-toastify";

import contactEmail from "../assets/images/contact_us_first.png";
import contactLocalization from "../assets/images/contact_us_second.png";
import contactPhone from "../assets/images/contact_us_third.png";

export const ContactPage = () => {
	const [formData, setFormData] = useState({
		topic: "",
		description: "",
	});

	const { topic, description } = formData;

	const onSubmit = async (e) => {
		e.preventDefault();
		setFormData(() => ({
			topic: "",
			description: "",
		}));
		toast.success("Wiadomość została wysłana!");
	};

	const onMutate = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	return (
		<>
			<header>
				<div
					className={`flex items-center justify-center flex-col bg-gray-200 h-[400px] bg-[url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")] bg-cover bg-no-repeat bg-center relative z-0 text-white`}>
					<div className="absolute w-full h-full bg-black/[.70] -z-10" />
					<div className="flex flex-col content-center items-center z-5">
						<h1 className="p-10 text-7xl font-['Dancing_Script']">
							Skontaktuj się z nami
						</h1>
					</div>
				</div>
			</header>
			<section className="bg-white py-12">
				<div className="flex flex-col mx-auto my-0 md:flex-row justify-center items-center p-5">
					<ContactCard
						src={contactEmail}
						iconClass="fa-envelope"
						title="EMAIL"
						content="vcwwa@hotel.com"
						content2=""
					/>
					<ContactCard
						src={contactLocalization}
						iconClass="fa-map-marker-alt"
						title="LOKALIZACJA"
						content={"plac Politechniki 1"}
						content2="00-661 Warszawa"
					/>
					<ContactCard
						src={contactPhone}
						iconClass="fa-phone"
						title="NUMER TELEFONU"
						content="+48 111 222 333"
						content2=""
					/>
				</div>
			</section>

			<div className="bg-white flex items-center justify-center flex-col xl:flex-row">
				<div className="w-[600px] p-5 text-center m-5">
					<h3 className="my-8 text-4xl font-bold text-gray-900">
						Napisz do nas
					</h3>
					<form onSubmit={onSubmit} className="space-y-7 pt-14 h-[450px]">
						<div>
							<label className="block mb-2 text-3xl"> Temat </label>
							<input
								className="w-[95%] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								type="text"
								id="topic"
								placeholder="Temat"
								value={topic}
								onChange={onMutate}
								autoComplete="off"
								required
							/>
						</div>
						<div>
							<label className="block mb-2 text-3xl"> Treść wiadomości </label>
							<textarea
								className="w-[95%] h-[150px] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white resize-none"
								type="text"
								id="description"
								placeholder="Napisz, w czym możemy Ci pomóc"
								value={description}
								onChange={onMutate}
								autoComplete="off"
								required
							/>
						</div>
						<div>
							<button
								type="submit"
								className="rounded-lg border border-black px-8 py-3 m-3 my-20 hover:bg-black hover:text-white transition duration-300">
								Wyślij
							</button>
						</div>
					</form>
				</div>
				<div className="hidden md:block p-5 m-5">
					<h3 className="my-8 text-4xl font-bold text-gray-900">
						Znajdź nas na mapie!
					</h3>
					<iframe
						className=" shadow-[0px_5px_15px_rgba(0,0,0,0.35)] m-5"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.2583478001084!2d21.00798907644807!3d52.22052397198417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecce948b6cb17%3A0x153b75bc0ab4c489!2splac%20Politechniki%201%2C%2000-661%20Warszawa!5e0!3m2!1spl!2spl!4v1685624820218!5m2!1spl!2spl"
						width="600"
						height="450"
						style={{ border: "2px solid black" }}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</>
	);
};
