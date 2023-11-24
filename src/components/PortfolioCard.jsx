import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../untils/motion";
import { open } from "../assets";

const overlay = (text, link, last = false) => {
    if (!last)
        return (
            <div className="overlaycard">
                <a href={link}>
                    <img
                        src={open}
                        alt="see the project"
                        className="w-9 h-9 object-cover"
                    />
                </a>
                <p className="text-lg font-medium text-white">{text}</p>
            </div>
        );
    else
        return (
            <div className="lastcard">
                <p className="text-lg font-medium text-white">
                    Your website here
                </p>
                <button className="py-2 px-3.5 text-white text-center bg-blue-600 rounded-md">
                    start a project
                </button>
            </div>
        );
};

const PortfolioCard = ({ src, link, shortText, index, last }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.75, 1)}
            className="rounded-3xl group"
        >
            <div className="relative flex flex-col justify-center items-center">
                <img
                    src={src}
                    alt="Project Card Image"
                    className="rounded-3xl w-full object-cover"
                />
                {overlay(shortText, link, last)}
            </div>
        </motion.div>
    );
};

export default PortfolioCard;
