import Button from "../../ui/Button";
import Logo from "./Logo";

import { motion } from "framer-motion";

import { theme } from "../../../theme.js";

const Navbar = () => {
    const colors = theme.colors;
    return (
        <nav className="flex justify-between items-center py-5 mob:flex-col">
            <Logo width={80} />
            <motion.div
                className="text-xl text-light flex gap-20 items-center tab:text-base tab:gap-10 mob:flex-col mob:mt-5"
                initial={{ x: "50%", scale: 0 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <motion.a
                    href="/"
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.light }}
                    transition={{ duration: 0.2 }}
                >
                    About
                </motion.a>
                <motion.a
                    href="/"
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.light }}
                    transition={{ duration: 0.2 }}
                >
                    Experience
                </motion.a>
                <motion.a
                    href="/"
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 1, color: colors.light }}
                    transition={{ duration: 0.2 }}
                >
                    Work
                </motion.a>
                <Button to="/" className="tab:text-base">Download CV</Button>
            </motion.div>
        </nav>
    );
};
export default Navbar;
