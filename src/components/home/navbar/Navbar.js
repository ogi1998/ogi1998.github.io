import Button from "../../ui/Button";
import Logo from "./Logo";

import { motion } from "framer-motion";

import { theme } from "../../../theme.js";

const Navbar = ({refs}) => {
    const colors = theme.colors;
    return (
        <nav className="flex justify-between items-center py-5 mob:flex-col">
            <Logo width={80} onClick={() => window.location.reload()} />
            <motion.div
                className="text-xl text-light flex gap-20 items-center tab:text-base tab:gap-10 mob:flex-col mob:mt-5"
                initial={{ x: "50%", scale: 0 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{
                        scale: 1,
                        color: colors.light,
                        cursor: "pointer",
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={() => refs.current['exp'].scrollIntoView({behavior: 'smooth'})}
                >
                    Experience
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{
                        scale: 1,
                        color: colors.light,
                        cursor: "pointer",
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={() => refs.current['projects'].scrollIntoView({behavior: 'smooth'})}
                >
                    Projects
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, color: colors.secondary }}
                    whileTap={{ scale: 1 }}
                    initial={{
                        scale: 1,
                        color: colors.light,
                        cursor: "pointer",
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={() => refs.current['contact'].scrollIntoView({behavior: 'smooth'})}
                >
                    Contact
                </motion.a>
                <Button to="/" className="tab:text-base">
                    Download CV
                </Button>
            </motion.div>
        </nav>
    );
};
export default Navbar;
