import Button from "../../ui/Button";
import Logo from "./Logo";

import { motion } from "framer-motion";

import { theme } from "../../../theme.js";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import useResponsive from "../../hooks/useResponsive.js";

const Navbar = ({ refs }) => {
    const { colors } = theme;

    const [showItems, setShowItems] = useState(false);

    const isMob = useResponsive();
    return (
        <nav className="flex justify-between items-center py-5 mob:flex-col">
            <div className="flex justify-between mob:w-full items-center">
                <Logo width={80} onClick={() => window.location.reload()} />
                {isMob && (
                    <span
                        className={`${
                            showItems ? "text-secondary" : "text-light"
                        } text-4xl cursor-pointer hover:text-secondary`}
                        onClick={() => setShowItems((prev) => !prev)}
                    >
                        {showItems ? <FaTimes /> : <FaBars />}
                    </span>
                )}
            </div>
            <motion.div
                className="text-lg text-light flex gap-20 items-center tab:text-base tab:gap-10 mob:flex-col mob:mt-5"
                initial={
                    (isMob && { y: 0, opacity: 0, height: 0 }) ||
                    (!isMob && { x: "50%", scale: 0, height: 100 })
                }
                animate={
                    (isMob && showItems && { y: 0, opacity: 1, height: 300 }) ||
                    (isMob && !showItems && { y: 0, opacity: 0, height: 0 }) ||
                    (!isMob && { x: 0, scale: 1 })
                }
                transition={
                    isMob ? { duration: 0.5 } : { duration: 0.5, delay: 0.5 }
                }
                exit={{ height: 0 }}
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
                    onClick={() =>
                        refs.current["exp"].scrollIntoView({
                            behavior: "smooth",
                        })
                    }
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
                    onClick={() =>
                        refs.current["projects"].scrollIntoView({
                            behavior: "smooth",
                        })
                    }
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
                    onClick={() =>
                        refs.current["contact"].scrollIntoView({
                            behavior: "smooth",
                        })
                    }
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
