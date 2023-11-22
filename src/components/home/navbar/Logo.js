import logo from '../../../logo.svg';

import { motion } from 'framer-motion';

const Logo = ({ width }) => {
	const containerStyle = {
		initial: {
			scale: 0.1,
			position: "absolute",
			x: "40vw", y: "50vh",
			padding: 0
		},
		animate: {
			scale: 1, position: "relative", x: 0, y: 0
		},
		transition: {
			duration: 1
		}
	}
	const spanStyle = {
		initial: {
			position: "absolute",
			left: 8,
			top: 8,
			width: '80%', height: '80%',
			borderRadius: '50%',
			cursor: "pointer"
		},
		hover: {
			boxShadow: '0 1px 15px #fff',

		}
	}
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			variants={containerStyle}
			transition={{ duration: 1 }}
		>
			<motion.img src={logo} width={width} alt='logo' />
			<motion.span
				variants={spanStyle}
			>
			</motion.span>
		</motion.div>
	)
}
export default Logo