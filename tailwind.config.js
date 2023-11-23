module.exports = {
	content: ["./src/**/*.{js, jsx}"],
	theme: {
		colors: {
			primary: "#212830",
			secondary: "#08BB94",
			gray: "#B5B5C1",
			light: "#FFF",
			dark: "#000"
		},
		extend: {
			backgroundSize: {
				"full": "100% 100%"
			},
			backgroundImage: {
				"home": 'url("./assets/background.png")',
				"hero": 'url("./assets/hero.png")',
				"form": 'url("./assets/background3.png")',
				"form-blurred": 'url("./assets/background2.png")',
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"profile": 'url("./assets/user_profile.jpg")'
			},
			boxShadow: {
				"small": "0px 0px 7px",
				"normal": "0px 1px 10px",
				"normal-hover": "0px 1px 20px",
				"normal-focused": "0px 1px 30px",
			}
		}
	},
	plugins: []
};
