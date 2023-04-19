import { Routes, Route } from "react-router-dom";
import { HomePage, ContactPage, PageNotFound } from "../pages";

export const AllRoutes = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>
	);
};
