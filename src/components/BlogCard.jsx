import { motion } from "framer-motion";
import { fadeIn } from "../untils/motion";

const BlogCard = ({ src, title, date }) => {
    return (
        <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.75)}
            className="rounded-2xl border shadow-2xl shadow-gray-300/70"
        >
            <img
                src={src}
                alt="Blog Post Card"
                className="block object-cover w-full h-52 rounded-2xl"
            />
            <div className="p-8">
                <h4 className="text-2xl font-black text-[#130F49]">{title}</h4>
                <p className="text-sm mt-2">{date}</p>
            </div>
        </motion.div>
    );
};

export default BlogCard;
