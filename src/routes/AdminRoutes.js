import { Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { Spinner } from "../components/Spinner";

export const AdminRoutes = ({ children }) => {
	const { loggedIn, checkingStatus, adminLoggedIn } = useAuthStatus();

	if (checkingStatus) {
		return <Spinner />;
	}

	return loggedIn ? (
		adminLoggedIn ? (
			children
		) : (
			<Navigate to="/asd" />
		)
	) : (
		<Navigate to="/signin" />
	);
};
