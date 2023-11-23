import Hero from "./hero/Hero"
import Navbar from "./navbar/Navbar"

import { motion } from "framer-motion"
const Home = () => {
	return (
		<motion.div
			className="bg-primary min-h-screen px-28 h-[150vh]"
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.5}}
		>
			<Navbar />
			<Hero />
			<div>
				sadadasdasdas
			</div>
		</motion.div>
	)
}
export default Home