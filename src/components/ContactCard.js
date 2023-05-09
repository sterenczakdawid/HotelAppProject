export const ContactCard = ({ src }) => {
	return (
		<div class="max-w-sm bg-white border border-black shadow overflow-hidden">
			<a href="#">
				<img class="" src={src} alt="" />
			</a>
			<div class="p-5">
				<a href="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
						Noteworthy technology acquisitions 2021
					</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700">
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p>
			</div>
		</div>
	);
};
