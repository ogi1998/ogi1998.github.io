import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";

const Icon = () => {
	const circleControls = useAnimation();
	const vControls = useAnimation();

	useEffect(() => {
		circleControls.start({
			pathLength: 1,
			pathOffset: 0,
			transition: { duration: 1 }
		});

		vControls.start({
			pathLength: 1,
			pathOffset: 0,
			transition: { duration: 1, delay: 1 }
		});

		circleControls.start({
			scale: 0,
			transition: {duration: 0.5, delay: 2}
		});
		vControls.start({
			scale: 0,
			transition: {duration: 0.5, delay: 2}
		});
	}, [circleControls, vControls]);
	return (
		<svg width="200" height="200">
			<motion.path
				d="M100,20 A80,80 0 1,0 100,180 A80,80 0 1,0 100,20"
				initial={{ pathLength: 1, pathOffset: 1 }}
				animate={circleControls}
				fill="transparent"
				stroke="white"
				strokeWidth="10"
				style={{ strokeLinecap: "round" }}
			/>
			<motion.path
				d="M70,80 L100,130 L130,80"
				initial={{ pathLength: 1, pathOffset: 1 }}
				animate={vControls}
				fill="transparent"
				stroke="#08BB94"
				strokeWidth="20"
				style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
			/>
		</svg>
	);
};


export default Icon