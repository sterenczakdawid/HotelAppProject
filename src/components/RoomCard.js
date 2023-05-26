import { Link } from "react-router-dom";

export const RoomCard = ({ room, id }) => {
	return (
		<>
			<div className="bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] overflow-hidden h-[420px] min-w-[300px] max-w-[400px] m-10 transition duration-[1000ms]">
				<Link to={`/rooms/${id}`} className="">
					{/* <div */}
					{/* className={`relative w-full after:transition-transform after:duration-300 after:bg-black/[.80] after:h-[100%] after:w-[100%] after:absolute after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:origin-right after:content-["Kliknij_żeby_zobaczyć_szczegóły!"] after:flex after:text-white after:items-center after:justify-center`}> */}
					<div
						style={{ backgroundImage: `url(${room.imgUrls[0]})` }}
						className="relative w-full min-w-[400px] h-[266px] bg-cover bg-no-repeat bg-center">
						{/* className={`relative w-full min-w-[400px] h-[266px] bg-cover bg-no-repeat bg-center after:transition-transform after:duration-300 after:bg-black/[.80] after:h-[100%] after:w-[100%] after:absolute after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:origin-right after:content-["Kliknij_żeby_zobaczyć_szczegóły!"] after:flex after:text-white after:items-center after:justify-center`}> */}
						<div className="relative text-[13px] p-5 w-full h-full text-transparent bg-transparent hover:text-white hover:bg-black/[.80] transition-bg duration-300 scale-90 hover:scale-100">
							<p>{room.description}</p>
							<button className="px-5 py-3 absolute bottom-20 left-[50%] -translate-x-2/4 text-2xl mt-10 hover:border hover:border-white rounded-lg hover:bg-black">
								Szczegóły pokoju
							</button>
						</div>
					</div>
					<div className="p-5">
						<h5 className="mb-2 text-3xl tracking-tight text-gray-900 mt-3">
							{room.name}
						</h5>
						<p className="mb-3 font-normal text-gray-700">
							cena: {room.price} zł/noc
						</p>
						<hr />
						<br />
						<div className="flex text-2xl items-center justify-around">
							<div className="flex items-center justify-center">
								<i className="fa-solid fa-up-right-and-down-left-from-center px-2"></i>
								<p>metraż: {room.size}m</p>
								<sup>2</sup>
							</div>
							<div className="flex items-center justify-center">
								<i className="fa-solid fa-user px-2"></i>
								<p>max osób: {room.capacity}</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};
