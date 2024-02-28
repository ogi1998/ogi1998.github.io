import { motion } from "framer-motion";

import { theme } from "../../theme.js";

const Button = ({ to, children, className = "" }) => {
    const colors = theme.colors;

    const btnStyle = {
        initial: {
            position: "relative",
            display: "inline-block",
            padding: "12px 20px",
            cursor: "pointer",
            color: colors.secondary,
            border: `1px solid ${colors.secondary}`,
            zIndex: 10,
        },
        hover: {
            color: colors.light,
        },
    };
    const bgStyle = {
        initial: {
            position: "absolute",
            left: "50%",
            top: 0,
            height: "100%",
            backgroundColor: colors.secondary,
            zIndex: -1,
        },
        hover: {
            width: "100%",
            left: 0,
            transition: { ease: "easeIn", duration: 0.3 },
        },
    };
    return (
        <motion.a
            href={to}
            className={className}
            initial="initial"
            whileHover="hover"
            variants={btnStyle}
            target="_blank"
            rel="noreferrer"
        >
            {children}
            <motion.span variants={bgStyle}></motion.span>
        </motion.a>
    );
};
export default Button;
