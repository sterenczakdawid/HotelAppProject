export const ContactCard = ({ src, iconClass, title, content, content2 }) => {
	return (
		<div className="max-w-sm bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] overflow-hidden h-[300px] w-[300px] m-10">
			<div className="relative w-full">
				<img
					className="w-full h-auto"
					src={src}
					alt="Just some background image, not important"
				/>
				<i
					className={`fas ${iconClass} absolute top-[50%] left-[50%] text-white text-7xl text-center -translate-y-1/2 -translate-x-1/2`}
				/>
			</div>
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					{title}
				</h5>
				<p className="mb-3 font-normal text-gray-700">
					{content}
					<br />
					{content2}
				</p>
			</div>
		</div>
	);
};
