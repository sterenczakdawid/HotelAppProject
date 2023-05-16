/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				"room-hero-small": "url('assets/images/room_hero_small.jpg')",
				"room-hero-big": "url('assets/images/room_hero_big.jpg')",
			},
		},
	},
	plugins: [],
};
