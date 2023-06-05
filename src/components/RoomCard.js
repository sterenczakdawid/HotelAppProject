import { Link } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

export const RoomCard = ({ room, id, onDelete, onEdit }) => {
	const isAdmin = useAuthStatus();

	return (
		<>
			<div
				className={`bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] overflow-hidden ${
					isAdmin.adminLoggedIn ? "h-[460px]" : "h-[420px]"
				} min-w-[300px] max-w-[400px] m-10 transition duration-[1000ms]`}>
				<Link to={`/rooms/${id}`} className="">
					<div
						style={{ backgroundImage: `url(${room.imgUrls[0]})` }}
						className="relative w-full min-w-[400px] h-[266px] bg-cover bg-no-repeat bg-center">
						<div className="relative text-[13px] p-5 w-full h-full text-transparent bg-transparent hover:text-white hover:bg-black/[.80] transition-bg duration-300 scale-90 hover:scale-100">
							<p>{room.description}</p>
							<button className="px-5 py-3 absolute bottom-20 left-[50%] -translate-x-2/4 text-2xl mt-10 hover:border hover:border-white rounded-lg hover:bg-black">
								Szczegóły pokoju <i className="fa-solid fa-arrow-right p-2"></i>
							</button>
						</div>
					</div>
					<div className="p-5">
						<h5 className="mb-2 text-3xl tracking-tight text-gray-900 mt-3">
							{room.name}
						</h5>
						<p className="mb-7 font-normal text-gray-700">
							cena: {room.price} zł/noc
						</p>
						<div className="flex text-2xl items-center justify-around border-t pt-7">
							<div className="flex items-center justify-center">
								<i className="fa-solid fa-up-right-and-down-left-from-center px-2"></i>
								<p>
									metraż: {room.size}m<sup>2</sup>
								</p>
							</div>
							<div className="flex items-center justify-center">
								<i className="fa-solid fa-user px-2"></i>
								<p>max osób: {room.capacity}</p>
							</div>
						</div>
					</div>
				</Link>
				{onDelete && (
					<div className="flex items-center justify-around border-t p-7">
						<i
							onClick={() => onEdit(id)}
							className="fa-solid fa-pen-to-square cursor-pointer"></i>
						<i
							onClick={() => onDelete(room.id, room.name)}
							className="fa-solid fa-trash-can text-red-500 cursor-pointer"></i>
					</div>
				)}
			</div>
		</>
	);
};
