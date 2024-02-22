import { useEffect } from "react";
import Icon from './Icon';
import { motion } from 'framer-motion';

const LoadingScreen = ({setIsLoading}) => {

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 2500);

		return () => clearTimeout(timeout);
	}, [setIsLoading]);

	return (
		<motion.div
		className='w-screen h-screen flex items-center justify-center absolute top-0'>
			<Icon />
		</motion.div>
	);
}
export default LoadingScreen;