import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Spinner, Popup } from "../components";
import SwiperCore, {
	Navigation,
	EffectFade,
	Pagination,
	Scrollbar,
	A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../assets/slider.css";
// import { Timestamp } from "firebase/firestore";

import Calendar from "react-calendar";
import { differenceInCalendarDays, addDays } from "date-fns";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const RoomDetails = () => {
	const [room, setRoom] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	const [date, setDate] = useState(new Date());
	// const [disabledDates, setDisabledDates] = useState([]);

	const today = new Date();
	const tomorrow = addDays(today, 1);
	const in2Days = addDays(today, 2);
	const in3Days = addDays(today, 3);
	const randomDate = addDays(today, 8);
	const randomDate2 = addDays(today, 9);
	const randomDate3 = addDays(today, 10);
	const randomDate4 = addDays(today, 11);
	const randomDateX = addDays(today, 14);
	const disabledDates = [
		tomorrow,
		in2Days,
		in3Days,
		randomDate,
		randomDate2,
		randomDate3,
		randomDate4,
		randomDateX,
	];

	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		const fetchRoom = async () => {
			const docRef = doc(db, "rooms", params.roomId);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				// console.log(docSnap.data());
				setRoom(docSnap.data());
				setLoading(false);
			}
		};

		fetchRoom();
	}, [navigate, params.roomId]);

	if (loading) {
		return <Spinner />;
	}

	function reserve(date) {
		// setDisabledRanges((disabledRanges) => [...disabledRanges, [start, end]]);
		// setRoom((prevState) => ({
		// 	...prevState,
		// 	reserved: [...reserved, date],
		// }));
		// setDisabledDates((disabledDates) => [...disabledDates, date]);
		// console.log(disabledDates[0]);
	}

	function tileDisabled({ date, view }) {
		// Disable tiles in month view only
		if (view === "month") {
			// Check if a date React-Calendar wants to check is on the list of disabled dates
			return disabledDates.find((dDate) => isSameDay(dDate, date));
		}
	}

	function isSameDay(a, b) {
		return differenceInCalendarDays(a, b) === 0;
	}

	return (
		<>
			<main className="bg-white -z-1">
				<Swiper
					className="w-full"
					slidesPerView={1}
					modules={[Navigation, EffectFade]}
					navigation
					effect={"fade"}
					loop
					speed={800}>
					{room.imgUrls.map((url, index) => (
						<SwiperSlide key={index} className="">
							<img
								className="w-full h-[500px] object-cover"
								src={`${room.imgUrls[index]}`}
								alt=""
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<section className="flex items-center justify-center flex-col">
					<div className="pt-16 max-w-screen-xl w-full mx-auto my-0 flex items-center justify-center flex-col">
						<h2 className="uppercase text-5xl md:text-6xl font-thin ">
							{room.name}
						</h2>
						<div className="underline w-[85%] h-1 bg-gray-200 mt-1 mb-10"></div>
					</div>
					<div className="text-center">
						<p className="uppercase text-3xl md:text-4xl font-thin">
							Podstawowe informacje:
						</p>
						<div className="flex text-2xl items-center justify-center pt-8 pb-5">
							<div className="flex items-center justify-center mx-10">
								<i className="fa-solid fa-up-right-and-down-left-from-center px-2"></i>
								<p>
									metraż: {room.size}m<sup>2</sup>
								</p>
							</div>
							<div className="flex items-center justify-center mx-10">
								<i className="fa-solid fa-user px-2"></i>
								<p>max osób: {room.capacity}</p>
							</div>
						</div>
						<p className="py-5 px-10 text-center max-w-[1000px]">
							{room.description}
						</p>
					</div>

					<div className="h-[180px] w-3/5 max-w-[360px] flex justify-center items-center flex-col border-2 border-black my-20 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-lg">
						<p className="text-black text-5xl py-3">{room.price} zł</p>
						<p className="pb-10">/noc</p>
						<button
							className="text-3xl border-2 border-black w-3/5 h-[35px] hover:bg-black hover:text-white transition duration-300 rounded-lg"
							onClick={() => setIsOpen(true)}>
							Zarezerwuj
						</button>
					</div>
				</section>

				<Popup open={isOpen} onClose={() => setIsOpen(false)}>
					<p className="text-3xl m-1">Wybierz datę rezerwacji</p>
					<Calendar
						minDate={new Date()}
						onChange={setDate}
						value={date}
						// selectRange={true}
						tileDisabled={tileDisabled}
						className="REACT-CALENDAR p-2"
						view="month"
					/>
					{/* <ul>zarezerwowane terminy:</ul>
					{room.reserved && room.reserved instanceof Timestamp && (
						<p>Reserved: {room.reserved.toDate().toLocaleString()}</p>
					)} */}
					{/* {date.length > 0 ? (
						<p>
							<span>Start:</span> {date[0].toDateString()}
							&nbsp; to &nbsp;
							<span>End:</span> {date[1].toDateString()}
						</p>
					) : (
						<p>
							<span>Default selected date:</span> {date.toDateString()}
						</p>
					)} */}
					<button
						className="text-3xl border-2 border-black w-3/5 max-w-[200px] h-[35px] hover:bg-black hover:text-white transition duration-300 rounded-lg m-2 hover:bg-black hover:text-white transition duration-300"
						disabled
						onClick={() => {
							reserve(date);
							// console.log(date);
						}}>
						Rezerwuj
					</button>
				</Popup>

				<div className="text-center p-5 w-full flex justify-center items-center flex-col border-t-2 border-b-2 border-gray-200">
					<p className="uppercase text-3xl md:text-3xl font-thin py-5">
						Informacje Dodatkowe
					</p>
					<div className="flex items-center justify-center">
						<i className="fa-regular fa-clock p-2 "></i>
						<p>
							Przyjazd <span className="px-12">16:00</span>
						</p>
					</div>
					<div className="flex items-center justify-center">
						<i className="fa-regular fa-clock p-2"></i>
						<p className="">
							Wyjazd <span className="px-12">12:00</span>
						</p>
					</div>
					<p className="p-5">
						Zwierzęta są akceptowane w cenie 70zł/doba za jedno zwierzę.
					</p>
				</div>

				<button className="p-10">
					<Link
						to="/rooms"
						className="px-7 py-2 rounded-lg mb-10 text-3xl border-2 border-gray-400 bg-gray-400 hover:bg-black hover:text-white transition duration-300">
						Powrót do listy pokoi
					</Link>
				</button>
			</main>
		</>
	);
};
