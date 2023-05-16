import { TestComponent } from "../components";
import { useEffect, useState } from "react";
import {
	getDocs,
	collection,
	query,
	limit,
	startAfter,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import { Spinner } from "../components/Spinner";

export const Rooms = () => {
	const [rooms, setRooms] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRooms = async () => {
			try {
				const roomsRef = collection(db, "rooms");
				const q = query(roomsRef, limit(10));

				const querySnap = await getDocs(q);

				const rooms = [];

				querySnap.forEach((room) => {
					return rooms.push({
						id: room.id,
						data: room.data(),
					});
				});

				setRooms(rooms);
				setLoading(false);
			} catch (error) {
				toast.error("Could not fetch rooms");
			}
		};
		fetchRooms();
		console.log(rooms);
	}, []);
	return (
		<>
			<header>
				<div
					className={`flex items-center justify-center flex-col bg-gray-200 h-[400px] bg-room-hero-small lg:bg-room-hero-big bg-cover bg-no-repeat bg-center relative z-0 text-white`}>
					<div className="absolute w-full h-full bg-black/[.80] -z-10" />
					<div className="flex flex-col content-center items-center z-5">
						<h1 className="p-10 text-7xl font-['Dancing_Script']">
							Nasze pokoje
						</h1>
					</div>
				</div>
			</header>

			<div className="dick">
				<header>
					<p className="pageHeader">Our rooms here!</p>
				</header>

				{loading ? (
					<Spinner />
				) : rooms && rooms.length > 0 ? (
					<>
						<main>
							<ul>
								{rooms.map((room) => (
									<h3>{room.data.name}</h3>
								))}
							</ul>
						</main>
					</>
				) : (
					<p>No rooms for you mf</p>
				)}
			</div>
			<TestComponent />;
		</>
	);
};
