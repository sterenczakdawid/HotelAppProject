import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/config";
import { Spinner } from "../components";
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
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// import Calendar from "react-calendar";
// import { isWithinInterval, getTime } from "date-fns";

export const RoomDetails = () => {
	const [room, setRoom] = useState(null);
	const [loading, setLoading] = useState(true);

	const swiperNavPrevRef = useRef(null);
	const swiperNavNextRef = useRef(null);

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
			{/* <div className="h-[80.8px] w-full bg-black/[.80]"></div>
			{console.log(room.imgUrls)} */}

			<Swiper
				className="w-full"
				slidesPerView={1}
				// pagination={{ clickable: true }}
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
					<button className="text-3xl border-2 border-black w-3/5 h-[35px] hover:bg-black hover:text-white transition duration-300 rounded-lg">
						Zarezerwuj
					</button>
				</div>
			</section>

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

			{/* <ul>Zajęte terminy:</ul> */}
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
