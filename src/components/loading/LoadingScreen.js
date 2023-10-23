import { useEffect } from "react";
import Icon from './Icon';
import { motion } from 'framer-motion';

const LoadingScreen = ({setIsLoading}) => {

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timeout);
	}, [setIsLoading]);

	return (
		<motion.div
		className='bg-dark w-screen h-screen flex items-center justify-center absolute top-0'
		initial={{scale: 1}}
		animate={{scale: 0}}
		transition={{duration: 0.5, delay: 3}}
		>
			<Icon />
		</motion.div>
	);
}
export default LoadingScreen;