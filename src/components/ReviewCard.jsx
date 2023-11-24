import { motion } from "framer-motion";

import { zoomIn } from "../untils/motion";
import { qoute } from "../assets";

const ReviewCard = ({ src, name, review, site, index }) => {
    return (
        <motion.div
            variants={zoomIn(index * 0.5, 0.75)}
            className="border w-full rounded-xl bg-white p-8 sm:p-10 flex flex-col justify-center items-center gap-3"
        >
            <div className="relative text-center lg:mb-5">
                <img
                    src={src}
                    alt={`${name} picture`}
                    className="absolute -top-[18%] left-1/2 w-24 h-24 object-cover rounded-full bg-purple-300 transform -translate-x-1/2 -translate-y-1/2 border border-2 border-white"
                />
                <img
                    src={qoute}
                    alt="qoute img"
                    className="block mx-auto mt-8"
                />
                <p className="text-center mb-7 lg:mb-12">{review}</p>
                <p className="text-xl text-[#130F49] font-black">{name}</p>
                <p>
                    <a href="#">{site}</a>
                </p>
            </div>
        </motion.div>
    );
};

export default ReviewCard;
