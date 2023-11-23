import Button from "../../ui/Button"
import Logo from "./Logo"

import { motion } from "framer-motion"

const Navbar = () => {
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
				<Button to="/">Download CV</Button>
			</motion.div>
		</nav>
	)
}
export default Navbar