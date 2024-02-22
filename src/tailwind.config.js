module.exports = {
	content: ["./src/**/*.{js, jsx}"],
	theme: {
		colors: {
			primary: "#272138",
			secondary: "#9F8FEF",
			gray: "#B5B5C1",
			light: "#FFF",
			dark: "#000"
		},
		extend: {
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
