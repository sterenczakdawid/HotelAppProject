/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				"room-hero-small": "url('assets/images/room_hero_small.jpg')",
				"room-hero-big": "url('assets/images/room_hero_big.jpg')",
				"hero-big": "url('assets/images/hero-big.jpg')",
				"hero-small": "url('assets/images/hero-small.jpg')",
				"page-not-found": "url('assets/images/page-not-found.jpg')",
			},
		},
	},
	plugins: [],
};
