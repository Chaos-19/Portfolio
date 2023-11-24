import { motion } from "framer-motion";

import { fadeIn, slideIn } from "../untils/motion";
import { styles } from "../styles";

const color = [
    {
        color: "bg-cyan-600",
        text: "text-cyan-600"
    },
    {
        color: "bg-yellow-600",
        text: "text-yellow-600"
    },
    {
        color: "bg-red-600",
        text: "text-red-600"
    },
    {
        color: "bg-blue-600",
        text: "text-blue-600"
    }
];

const MethodCard = ({ index, title, body }) => {
    return (
        <motion.div
            variants={slideIn("right", "tween", index * 0.5, 1)}
            className={`p-5 sm:p-8 flex flex-col rounded-2xl  transition-shadow bg-white duration-500 sm:hover:shadow-2xl hover:shadow-grey-500/40 border md:border-none`}
        >
            <div className="flex flex-col items-start gap-2 justify-start">
                <div className="flex flex-row gap-3 items-center">
                    <div
                        className={`w-3 h-3 ${color[index].color} rounded-full`}
                    />
                    <span
                        className={`font-medium ${color[index].text} text-lg`}
                    >
                        {`Phase ${index + 1}`}
                    </span>
                </div>
                <h3 className={`text-[#130F49] font-black text-3xl`}>
                    {title}
                </h3>
            </div>
            <p className="text-[#55527c] text-[16px] my-2 leading-6 lg:pr-16 lg:mr-5 lg:text-[17px]">
                {body}
            </p>
        </motion.div>
    );
};

export default MethodCard;
