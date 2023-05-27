import { Routes, Route } from "react-router-dom";
import {
	HomePage,
	ContactPage,
	Rooms,
	SignIn,
	SignUp,
	Profile,
	PageNotFound,
	RoomDetails,
	AddNewRoom,
} from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="rooms" element={<Rooms />} />

				<Route path="signin" element={<SignIn />} />
				<Route
					path="profile"
					element={
						<ProtectedRoutes>
							<Profile />
						</ProtectedRoutes>
					}
				/>
				<Route path="signup" element={<SignUp />} />

				<Route path="/rooms/:roomId" element={<RoomDetails />} />

				<Route path="/addroom" element={<AddNewRoom />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>
	);
};
