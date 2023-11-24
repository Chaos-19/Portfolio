import { motion } from "framer-motion";

import { BlogCard } from "../components";

import { blogs } from "../constants";
import { styles } from "../styles";
import { staggerContainer, textVariant2 } from "../untils/motion";
import { arrow } from "../assets";

const BlogPost = () => {
    return (
        <section
            className={`{styles.paddingY} sm:py-16 py-14 my-5`}
            id="blog"
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="w-full max-w-7xl mx-auto sm:px-3 px-2 "
            >
                <motion.div
                    variants={textVariant2}
                    className="flex flex-col justify-center py-5 text-center"
                >
                    <p className="text-sm text-gray-600">LATEST</p>
                    <h2 className="text-[50px] xs:text-4xl font-black text-[#130F49]">
                        From the Blog
                    </h2>
                </motion.div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-3 px-2 mt-3 hover:-transition-y-1 transition-transform duration-300 ">
                    {blogs.map((blog, index) => {
                        return (
                            <BlogCard
                                key={index}
                                {...blog}
                            />
                        );
                    })}
                </div>
                <div className="px-4 mt-12 text-md text-[#130f49] flex justify-end items-center">
                    <button className="inline-flex gap-1 items-center">
                        View all{" "}
                        <img
                            src={arrow}
                            alt="see all arrow"
                            className="w-3 h-3 object-cover"
                        />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default BlogPost;
