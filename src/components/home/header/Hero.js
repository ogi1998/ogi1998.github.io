import { motion } from "framer-motion";
import Button from "../../ui/Button";
import Link from "../../ui/Link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { theme } from "../../../theme";
const Hero = () => {
    const colors = theme.colors;
    return (
        <motion.div
            className="w-1/2 pt-20 lap:pt-10 lap: w-4/5 tab:w-full tab:flex tab:flex-col tab:items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 1.5,
                delay: 1,
                bounce: 0.25,
                type: "spring",
            }}
        >
            <h2 className="text-secondary text-5xl py-2 lap:text-4xl tab:text-3xl mob:text-2xl">Hi! I'm</h2>
            <h1 className="text-gray font-extrabold text-7xl py-2 lap:text-6xl tab:text-5xl mob:text-3xl">
                Ognjen Vujasinovic
            </h1>
            <h3 className="text-6xl font-light tracking-widest py-2 lap:text-5xl tab:text-4xl mob:text-2xl">
                <span className="text-secondary">Software</span>{" "}
                <span className="text-gray">Engineer</span>
            </h3>
            <p className=" text-gray text-2xl py-2 w-[90%] mob:text-base tab:text-center">
                I'm a frontend-focused software engineer specializing in
                outstanding UI experiences and adept at creative
                problem-solving. I'm currently working as a Frontend Developer
                at <Link to="https://elevatebits.com/">ElevateBits</Link>.
            </p>
            <div className="flex gap-14 text-4xl text-gray my-5 tab:gap-12 tab:text-3xl mob:text-xl">
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.gray }}
                    transition={{ duration: 0.2 }}
                    href="https://github.com/ogi1998"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.gray }}
                    transition={{ duration: 0.2 }}
                    href="https://www.linkedin.com/in/ognjen-vujasinovic-6a38b8196/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.gray }}
                    transition={{ duration: 0.2 }}
                    href="mailto:ogivuja@gmail.com"
                >
                    <FaEnvelope />
                </motion.a>
            </div>
            <div className="flex gap-5">
                <Button to="mailto:ogivuja@gmail.com" className="text-2xl block tab:text-xl mob:text-base">
                    Let's get in touch!
                </Button>
            </div>
        </motion.div>
    );
};
export default Hero;
