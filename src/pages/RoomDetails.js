import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/config";
import { Spinner } from "../components";

export const RoomDetails = () => {
	const [room, setRoom] = useState(null);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();
	const params = useParams();
	const auth = getAuth();

	useEffect(() => {
		const fetchListing = async () => {
			const docRef = doc(db, "rooms", params.roomId);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				console.log(docSnap.data());
				setRoom(docSnap.data());
				setLoading(false);
			}
		};

		fetchListing();
	}, [navigate, params.roomId]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<main>
			{/* SLIDER */}

			<div className="listingDetails my-28">
				<p className="listingName">{room.name}</p>
				<p>{room.price}zł/noc</p>
				<p>osob: {room.capacity}</p>
				<p>opis: {room.description}</p>
				<p>wielkosć: {room.size}</p>
			</div>

			<ul>Lista udogodnień w pokoju:</ul>
			<ul>Zajęte terminy:</ul>
		</main>
	);
};
