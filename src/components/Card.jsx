import { motion } from "framer-motion";

import { fadeIn } from "../untils/motion";

const Card = ({ id, index, icon, color, title, text, isActive, setActive }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 1)}
            className={`p-8 sm:p-12 flex flex-col rounded-2xl  transition-shadow bg-white duration-500 sm:hover:shadow-3xl ${
                isActive === id ? "shadow-xl shadow-grey-500/40" : ""
            }`}
            onClick={() => setActive(id)}
        >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
                <div className={`p-3 rounded-xl border ${color}`}>
                    <img
                        src={icon}
                        alt={`${title} Card`}
                        className="object-contain w-9 h-9"
                    />
                </div>
                <h3 className={`text-[#130F49] font-bold text-2xl`}>{title}</h3>
            </div>
            <p className="text-[#55527c] text-[14px] my-2 leading-6 lg:pr-16 lg:mr-5 lg:text-[17px] md:font-light">
                <b className="text-[#130F49]">
                    {text.slice(0, text.indexOf(".") + 1)}
                </b>
                {text.slice(text.indexOf(".") + 1)}
            </p>
        </motion.div>
    );
};

export default Card;
