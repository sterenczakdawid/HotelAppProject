import { Routes, Route } from "react-router-dom";
import {
	HomePage,
	ContactPage,
	Rooms,
	SignIn,
	SignUp,
	Profile,
	PageNotFound,
} from "../pages";

export const AllRoutes = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="rooms" element={<Rooms />} />

				<Route path="signin" element={<SignIn />} />
				<Route path="profile" element={<Profile />} />
				<Route path="signup" element={<SignUp />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>
	);
};
