export const AboutUs = () => {
	return (
		<section id="aboutus" className="aboutus bg-white py-24">
			<div className="max-w-screen-xl w-full flex items-center justify-center flex-col mx-auto my-0">
				<h2 className="uppercase text-5xl">o nas</h2>
				<div className="underline w-28 h-2 bg-black mt-1 mb-10"></div>

				<div className="picture flex items-center justify-around flex-col md:flex-row">
					<img
						src="https://images.unsplash.com/photo-1564574685150-74a84d02d695?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"
						alt="our hotel"
						className="p-5"
					/>
					<div className="stars flex flex-col p-5">
						<div>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
						</div>
						<p className="p-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
							temporibus accusamus consequuntur amet modi laboriosam at
							sapiente, esse explicabo nostrum earum sequi dicta reiciendis
							tempore fuga neque. Quae, culpa cumque quaerat sit amet a
							architecto dolorum nulla omnis dolor praesentium laborum
							voluptatibus quod! Fugit dignissimos voluptatem unde neque.
							Impedit, doloribus?
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
