import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/config";
import { Spinner } from "../components";
// import Calendar from "react-calendar";
// import { isWithinInterval, getTime } from "date-fns";

export const RoomDetails = () => {
	const [room, setRoom] = useState(null);
	const [loading, setLoading] = useState(true);

	// const [date, setDate] = useState(new Date());
	// const [disabledRanges, setDisabledRanges] = useState([]);

	const navigate = useNavigate();
	const params = useParams();
	const auth = getAuth();

	// function isWithinRange(date, range) {
	// 	return isWithinInterval(date, { start: range[0], end: range[1] });
	// }

	// function isWithinRanges(date, ranges) {
	// 	return ranges.some((range) => isWithinRange(date, range));
	// }

	// function tileDisabled({ date, view }) {
	// 	// Add class to tiles in month view only
	// 	if (view === "month") {
	// 		// Check if a date React-Calendar wants to check is within any of the ranges
	// 		return isWithinRanges(date, disabledRanges);
	// 	}
	// }

	useEffect(() => {
		const fetchListing = async () => {
			const docRef = doc(db, "rooms", params.roomId);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				// console.log(docSnap.data());
				setRoom(docSnap.data());
				setLoading(false);
			}
		};

		fetchListing();
	}, [navigate, params.roomId]);

	if (loading) {
		return <Spinner />;
	}

	// function reserve(start, end) {
	// 	setDisabledRanges((disabledRanges) => [...disabledRanges, [start, end]]);
	// 	console.log(disabledRanges);
	// }

	return (
		<main className="bg-white">
			{/* SLIDER */}

			<div className="listingDetails my-28">
				<p className="listingName">{room.name}</p>
				<p>{room.price}zł/noc</p>
				<p>osob: {room.capacity}</p>
				<p>opis: {room.description}</p>
				<p>wielkosć: {room.size}</p>
			</div>

			<ul>Zajęte terminy:</ul>
			{/* <Calendar
				minDate={new Date()}
				onChange={setDate}
				value={date}
				selectRange={true}
				tileDisabled={tileDisabled}
				className="REACT-CALENDAR p-2"
				view="month"
			/>
			{date.length > 0 ? (
				<p>
					<span>Start:</span> {date[0].toDateString()}
					&nbsp; to &nbsp;
					<span>End:</span> {date[1].toDateString()}
				</p>
			) : (
				<p>
					<span>Default selected date:</span> {date.toDateString()}
				</p>
			)}
			<button
				onClick={() => {
					reserve(date[0], date[1]);
				}}>
				rezerwuj
			</button> */}
		</main>
	);
};
