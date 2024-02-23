import { motion } from "framer-motion";
import Button from "../../ui/Button";
import Link from "../../ui/Link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { theme } from "../../../theme";
const Hero = () => {
    const colors = theme.colors;
    return (
        <motion.div
            className="w-1/2 pt-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 1.5,
                delay: 1,
                bounce: 0.25,
                type: "spring",
            }}
        >
            <h2 className="text-secondary text-5xl py-2">Hi! I'm</h2>
            <h1 className="text-gray font-extrabold text-7xl py-2">
                Ognjen Vujasinovic
            </h1>
            <h3 className="text-6xl font-light tracking-widest py-2">
                <span className="text-secondary">Software</span>{" "}
                <span className="text-gray">Engineer</span>
            </h3>
            <p className=" text-gray text-2xl py-2 w-[90%]">
                I'm a frontend-focused software engineer specializing in
                outstanding UI experiences and adept at creative
                problem-solving. I'm currently working as a Frontend Developer
                at <Link to="https://elevatebits.com/">ElevateBits</Link>.
            </p>
            <div className="flex gap-14 text-4xl text-gray my-5">
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.gray }}
                    transition={{ duration: 0.2 }}
                    href="https://github.com/ogi1998"
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.gray }}
                    transition={{ duration: 0.2 }}
                    href="https://www.linkedin.com/in/ognjen-vujasinovic-6a38b8196/"
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
                <Button to="mailto:ogivuja@gmail.com" className="text-2xl block">
                    Let's get in touch!
                </Button>
            </div>
        </motion.div>
    );
};
export default Hero;
