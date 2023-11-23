import { motion } from "framer-motion"

const Button = ({to, children, className=""}) => {
	const btnStyle = {
		initial: {
			position: "relative",
			display: "inline-block",
			borderRadius: "4px",
			padding: "12px 20px",
			cursor: "pointer",
			color: "#08BB94",
			border: "1px solid #08BB94",
			zIndex: 10
		},
		hover: {
			color: "#fff"
		}
	};
	const bgStyle = {
		initial: {
			position: "absolute",
			left: '50%',
			top: 0,
			height: "100%",
			backgroundColor: "#08BB94",
			zIndex: -1
		},
		hover: {
			width: "100%",
			left: 0,
			transition: { ease: "easeIn", duration: 0.3 }
		}
	}
	return (
		<motion.a
			href={to}
			className={className}

			initial="initial"
			whileHover="hover"
			variants={btnStyle}
		>
			{children}
			<motion.span variants={bgStyle}></motion.span>
		</motion.a>
	)
}
export default Button