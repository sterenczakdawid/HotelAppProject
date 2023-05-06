import { Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { Spinner } from "../components/Spinner";

export const ProtectedRoutes = ({ children }) => {
	// const isAuth = JSON.parse(localStorage.getItem("isAuth") || false);
	const { loggedIn, checkingStatus } = useAuthStatus();

	if (checkingStatus) {
		return <Spinner />;
	}

	return loggedIn ? children : <Navigate to="/signin" />;
};
