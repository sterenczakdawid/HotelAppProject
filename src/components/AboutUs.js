import { Link } from "react-router-dom";

export const AboutUs = () => {
	return (
		<>
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

			<section className=" border-t-2 border-gray-200 bg-gray-200 text-3xl">
				<div className="max-w-screen-xl w-full flex items-center justify-center flex-col mx-auto my-0 pt-20">
					<h2 className="uppercase text-5xl">Kilka ważnych informacji</h2>
					<div className="underline w-[100px] h-2 bg-black mt-1 mb-10"></div>
				</div>
				<div className="text-center p-5 w-full flex justify-center items-center flex-col border-t-2 border-b-2 border-gray-200">
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
					<div className="flex items-center justify-center">
						<i class="fa-solid fa-paw p-2"></i>
						<p className="p-5">
							Zwierzęta są akceptowane w cenie 70zł/doba za jedno zwierzę.
						</p>
					</div>
					<p className="max-w-[1050px] p-10 mt-20">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
						ducimus tempore quia nobis hic consectetur ipsam repellendus eos
						perferendis officia, quidem iusto recusandae saepe ut provident eius
						maiores odio inventore quod deserunt. Tempora quod ipsum quam. Nihil
						deserunt inventore suscipit ipsum rem dicta eius amet cumque, ut,
						unde eum quia cum enim ipsam autem molestiae pariatur officia iure.
					</p>

					<p className="max-w-[1050px] p-10 mt-20 font-bold">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quasi
						reiciendis obcaecati.
					</p>

					<Link to="statute" className = "p-10">
						<p className = "underline">Kliknij, żeby zobaczyć regulamin hotelu</p>
					</Link>
				</div>
			</section>
		</>
	);
};
