import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, EmailAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyD885adqmyDvo0UOmJHwqzj3KfmD9PEglU",
	authDomain: "hotelapp-826e5.firebaseapp.com",
	projectId: "hotelapp-826e5",
	storageBucket: "hotelapp-826e5.appspot.com",
	messagingSenderId: "427168836000",
	appId: "1:427168836000:web:7de8b02518d998d3f41cc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new EmailAuthProvider();
