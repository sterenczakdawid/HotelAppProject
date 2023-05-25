import { Link } from "react-router-dom";

export const RoomCard = ({ room, id }) => {
	return (
		<div className="bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] overflow-hidden h-[400px] min-w-[300px] max-w-[400px] m-10 transition duration-[1000ms]">
			{/* <Link to={`/rooms/${id}`} className="categoryListingLink"> */}
			<div className="relative">
				{/* <div className="after:transition-transform after:duration-300 after:bg-black/[.80] after:h-[100%] after:w-[100%] after:absolute after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:origin-right z-10"></div> */}
				<img
					className="w-full h-auto"
					src={room.imgUrls[0]}
					aria-hidden="true"
					alt=""
				/>
			</div>
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					{room.name}
				</h5>
				<p className="mb-3 font-normal text-gray-700">
					content
					<br />
					content 2
				</p>
			</div>
			{/* </Link> */}
		</div>
	);
};
