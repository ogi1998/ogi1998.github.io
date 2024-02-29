import logo from "../../../logo.svg";

import { motion } from "framer-motion";
import { theme } from "../../../theme";

const Logo = ({ width, onClick }) => {
    const colors = theme.colors;
    const containerStyle = {
        initial: { x: "42vw", y: "45vh", scale: 0 },
        animate: { x: 0, y: 0, scale: 1, transition: { duration: 1 } },
    };
    const spanStyle = {
        initial: {
            position: "absolute",
            left: 8,
            top: 8,
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            cursor: "pointer",
        },
        hover: {
            boxShadow: `0 1px 15px ${colors.light}`,
        },
    };
    return (
        <motion.button
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={containerStyle}
            onClick={onClick}
        >
            <motion.img src={logo} width={width} alt="logo" />
            <motion.span variants={spanStyle}></motion.span>
        </motion.button>
    );
};
export default Logo;
