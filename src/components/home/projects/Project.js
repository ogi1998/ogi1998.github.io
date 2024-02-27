import Button from "../../ui/Button";
import { motion } from "framer-motion";

const Project = ({ title, stack, desc, link, imgSrc, animDelay = 0 }) => {
    const infoStyle = {
        initial: {
            opacity: 0,
        },
        hover: {
            opacity: 1,
        },
    };

    const titleStyle = {
        hover: {
            translateY: 0,
            opacity: 1,
            transition: { type: "tween", duration: 0.5 },
        },
        initial: {
            translateY: -50,
            opacity: 0,
        },
    };

    const btnStyle = {
        hover: {
            translateY: 0,
            opacity: 1,
            transition: { type: "tween", duration: 0.5 },
        },
        initial: {
            translateY: 50,
            opacity: 0,
        },
    };
    return (
        <motion.div
            className="relative w-1/3"
            transition={{ type: "tween", duration: 1, delay: animDelay }}
            initial={{ translateY: 300, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
        >
            <img src={imgSrc} alt={title} className="w-full h-full" />
            <motion.div whileHover="hover" initial="initial">
                <motion.div
                    variants={infoStyle}
                    className="z-100 absolute top-0 left-0 flex flex-col items-center justify-around w-full h-full gap-10 bg-dprimary"
                >
                    <motion.div className="text-center flex flex-col justify-between gap-5" variants={titleStyle}>
                        <h2 className="text-light font-bold text-2xl">
                            {title}
                        </h2>
                        <p className="text-gray font-light italic text-center my-2">{desc}</p>
                        <p className="text-secondary text-lg italic">{stack}</p>
                    </motion.div>
                    <motion.div variants={btnStyle}>
                        <Button to={link}>SEE MORE</Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
export default Project;
