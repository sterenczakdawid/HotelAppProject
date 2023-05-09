export const PageHero = ({ url, heading }) => {
	return (
		<>
			<div
				className={`flex items-center justify-center flex-col bg-gray-200 h-[400px] bg-[url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")] bg-cover bg-no-repeat bg-center relative z-0 text-white`}>
				<div className="absolute w-full h-full bg-black/[.70] -z-10" />
				<div className="flex flex-col content-center items-center z-5">
					<h1 className="p-10 text-7xl font-['Dancing_Script']">Skontakuj się z nami</h1>
				</div>
			</div>
			<div className="h-screen bg-white"></div>;
		</>
	);
};
