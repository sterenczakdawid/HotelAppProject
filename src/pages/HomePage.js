import { Hero, TestComponent, AboutUs } from "../components";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export const HomePage = () => {
	const [rooms, setRooms] = useState([]);
	const roomsRef = collection(db, "rooms");

	
	useEffect(() => {
		async function getRooms() {
			const data = await getDocs(roomsRef);
			setRooms(
				data.docs.map((document) => ({ ...document.data(), id: document.id }))
			);
		}
		getRooms();
		console.log(rooms);
		// eslint-disable-next-line
	}, []);

	return (
		<section>
			<Hero />
			<AboutUs />
			<TestComponent />
		</section>
	);
};
