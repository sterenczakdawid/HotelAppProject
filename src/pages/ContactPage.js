import { PageHero } from "../components/PageHero";
import { ContactCard } from "../components";

import contactEmail from "../assets/images/contact_us_first.png";
import contactLocalization from "../assets/images/contact_us_second.png";
import contactPhone from "../assets/images/contact_us_third.png";

export const ContactPage = () => {
	return (
		<>
			<header>
				<div
					className={`flex items-center justify-center flex-col bg-gray-200 h-[400px] bg-[url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")] bg-cover bg-no-repeat bg-center relative z-0 text-white`}>
					<div className="absolute w-full h-full bg-black/[.70] -z-10" />
					<div className="flex flex-col content-center items-center z-5">
						<h1 className="p-10 text-7xl font-['Dancing_Script']">
							Skontakuj się z nami
						</h1>
					</div>
				</div>
			</header>
			<section className="bg-gray-700 flex flex-row justify-between p-5">
				<ContactCard src={contactEmail} />
				<ContactCard src={contactLocalization} />
				<ContactCard src={contactPhone} />
				<div className="w-[700px] h-[400px] border">
					<p>mapa</p>
				</div>
			</section>
			<div className="flex items-center justify-center">
				<div className="h-[800px] w-[95%] border mt-5 p-5 text-center">
					<p>formularz</p>
				</div>
			</div>
		</>
	);
};
