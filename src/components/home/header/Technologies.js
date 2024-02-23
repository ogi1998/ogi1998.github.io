import iconHTML from '../../../assets/html5.svg';
import iconCSS from '../../../assets/css3.svg';
import iconJS from '../../../assets/js.svg';
import iconREACT from '../../../assets/react.svg';
import iconSASS from '../../../assets/sass.svg';
import iconTW from '../../../assets/tailwind.svg'

import { motion } from 'framer-motion';

const imgs = [iconHTML, iconCSS, iconJS, iconREACT, iconSASS, iconTW];
const Technologies = () => {
	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: 1.5, delay: 1.75, bounce: 0.5, type: 'spring' }}>
			<h3 className="text-secondary text-center text-3xl font-light">Technologies I work with:</h3>
			<ul className=" list-none flex text-light gap-10 py-10 text-3xl">
				{imgs.map((img, idx) => (
					<motion.li
						key={idx}

						alt='HTML5'
						title='HTML5'
						initial={{ scale: 0, translateY: -100 }}
						animate={{ scale: 1, translateY: 0 }}
						transition={{ duration: 1, delay: 1.5 + idx / 10, bounce: 0.25, type: 'spring' }}
					>
						<motion.img src={img} width={75} />
					</motion.li>
				))}
			</ul>
		</motion.div>
	)
}
export default Technologies