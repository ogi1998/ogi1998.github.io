import { motion } from "framer-motion"
import Button from "../../ui/Button"
const Hero = () => {
	return (
		<div className="flex items-start justify-center h-[85vh]">
			<motion.div
				className="pt-28 w-1/2"
				initial={{ scale: 0}}
				animate={{ scale: 1}}
				transition={{ duration: 1, delay: 1, bounce: 0.5, type: 'spring' }}
			>
				<h2 className="text-secondary text-5xl py-2">Hi! I'm</h2>
				<h1 className="text-gray font-extrabold text-7xl py-2">Ognjen Vujasinovic</h1>
				<h3 className="text-5xl font-light tracking-widest py-2"><span className="text-secondary">Software</span> <span className="text-gray">Engineer</span></h3>
				<p className=" text-gray text-2xl py-2 w-2/3">
					I'm a frontend-focused software engineer specializing in outstanding UI experiences and adept at creative problem-solving.
					I'm currently working for a client at my company.
				</p>
				<Button to="/" className="mt-10 w-fit text-2xl">Contact me!</Button>
			</motion.div>
		</div>
	)
}
export default Hero