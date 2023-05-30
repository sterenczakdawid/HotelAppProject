import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [checkingStatus, setCheckingStatus] = useState(true);
	const [adminLoggedIn, setAdminLoggedIn] = useState(false);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setLoggedIn(true);
				if (user.uid === "nasdVG2ZNEbGoW5sjBKaN1jz5F33") {
					setAdminLoggedIn(true);
				}
			}
			setCheckingStatus(false);
		});
	});

	return { loggedIn, checkingStatus, adminLoggedIn };
};
