import { RoomCard } from "../components";
import { useEffect, useState } from "react";
import {
	getDocs,
	collection,
	query,
	limit,
	doc,
	deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import { Spinner } from "../components/Spinner";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { Link, useNavigate } from "react-router-dom";

export const Rooms = () => {
	const [rooms, setRooms] = useState(null);
	const [loading, setLoading] = useState(true);
	const isAdmin = useAuthStatus();

	const navigate = useNavigate();

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
		// console.log(rooms);
	}, []);

	const onDelete = async (roomId) => {
		if (window.confirm("Czy na pewno chcesz usunąć ten pokój?")) {
			await deleteDoc(doc(db, "rooms", roomId));
			const updatedRooms = rooms.filter((room) => room.id !== roomId);
			setRooms(updatedRooms);
			toast.success("Pokój został usunięty z listy dostępnych pokoi");
		}
	};

	const onEdit = (roomId) => navigate(`/edit-room/${roomId}`);

	return (
		<>
			<header>
				<div
					className={`flex items-center justify-center flex-col bg-white h-[400px] bg-room-hero-small lg:bg-room-hero-big bg-cover bg-no-repeat bg-center relative z-0 text-white`}>
					<div className="absolute w-full h-full bg-black/[.80] -z-10" />
					<div className="flex flex-col content-center items-center z-5">
						<h1 className="p-10 text-7xl font-['Dancing_Script']">
							Nasze pokoje
						</h1>
					</div>
				</div>
			</header>
			<div className="">
				{loading ? (
					<Spinner />
				) : rooms && rooms.length > 0 ? (
					<>
						<main className="bg-white">
							{isAdmin.adminLoggedIn && (
								<Link to="/addroom">
									<button className="mt-10 border border-black rounded-lg p-5 hover:bg-black hover:text-white transition duration-300">
										Dodaj nowy pokój do listy pokoi
									</button>
								</Link>
							)}
							<ul className="flex flex-wrap items-center justify-center">
								{rooms.map((room) =>
									isAdmin.adminLoggedIn ? (
										<RoomCard
											room={room.data}
											id={room.id}
											key={room.id}
											className="w-[500px]"
											onDelete={() => onDelete(room.id)}
											onEdit={() => onEdit(room.id)}
										/>
									) : (
										<RoomCard
											room={room.data}
											id={room.id}
											key={room.id}
											className="w-[500px]"
										/>
									)
								)}
							</ul>
						</main>
					</>
				) : (
					<p>Brak aktualnie dostępnych pokoi</p>
				)}
			</div>
		</>
	);
};
