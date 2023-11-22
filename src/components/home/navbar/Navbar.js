import Logo from "./Logo"

import { motion } from "framer-motion"
const Navbar = () => {
	const dlBtnStyle = {
		initial: {
			position: "relative",
			borderRadius: "4px",
			fontSize: "20px",
			padding: "12px 20px",
			cursor: "pointer",
			color: "#08BB94",
			border: "1px solid #08BB94",
		},
		hover: {
			color: "#fff"
		}
	};
	const blBtnBgStyle = {
		initial: {
			position: "absolute",
			left: '50%',
			top: 0,
			height: "100%",
			backgroundColor: "#08BB94",
			zIndex: -1,
		},
		hover: {
			width: "100%",
			left: 0,
			transition: { ease: "easeIn", duration: 0.3 }
		},
	}
	return (
		<nav className="flex justify-between items-center py-5">
			<Logo width={80} />
			<motion.div
				className="text-2xl text-light flex gap-20 items-center"
				initial={{ x: "50%", scale: 0 }}
				animate={{ x: 0, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<motion.a
					href="/"
					whileHover={{ scale: 1.2, color: "#08BB94", borderBottomLeftRadius: "10px", borderBottomColor: "#08BB04", borderBottomStyle: "solid" }}
					initial={{ scale: 1, color: "#fff", borderBottomLeftRadius: "10px" }}
					transition={{ duration: 0.2 }}
				>
					About
				</motion.a>
				<motion.a
					href="/"
					whileHover={{ scale: 1.2, color: "#08BB94", borderBottomLeftRadius: "10px", borderBottomColor: "#08BB04", borderBottomStyle: "solid" }}
					initial={{ scale: 1, color: "#fff", borderBottomLeftRadius: "10px" }}
					transition={{ duration: 0.2 }}
				>
					Experience
				</motion.a>
				<motion.a
					href="/"
					whileHover={{ scale: 1.2, color: "#08BB94" }}
					initial={{ scale: 1, color: "#fff" }}
					transition={{ duration: 0.2 }}
				>
					Work
				</motion.a>
				<motion.a
					href="/"
					whileHover={{ scale: 1.2, color: "#08BB94" }}
					initial={{ scale: 1, color: "#fff" }}
					transition={{ duration: 0.2 }}
				>
					Contact
				</motion.a>
				<motion.a
					initial="initial"
					whileHover="hover"
					variants={dlBtnStyle}
				>Download CV
					<motion.span variants={blBtnBgStyle}>
					</motion.span></motion.a>
			</motion.div>
		</nav>
	)
}
export default Navbar