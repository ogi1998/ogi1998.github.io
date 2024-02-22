import { motion } from "framer-motion";

const Link = ({ to, children }) => {
	return (
		<motion.a
			href={to}
			target="_blank"
			rel="noreferrer"
			className="inline-block text-secondary border-b border-b-secondary mx-1"
			whileHover={{scale: 1.1}}
		>
			{children}
		</motion.a>

	)
}
export default Link