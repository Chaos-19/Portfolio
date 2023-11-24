import { motion } from "framer-motion";

import { ReviewCard } from "../components";
import { reviews } from "../constants";
import { styles } from "../styles";
import { staggerContainer, fadeIn } from "../untils/motion";
import { stars, trustpilot } from "../assets";

const Feedbacks = () => {
    return (
        <section
            className={`{styles.paddingY} sm:py-16 py-14 my-5 bg-red-50`}
            id="testimonials"
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="w-full max-w-7xl mx-auto sm:px-3 px-2 "
            >
                <div className="flex flex-col justify-center py-5 text-center">
                    <p className="text-sm text-gray-600">REVIEWS</p>
                    <h2 className="text-[50px] xs:text-4xl font-black text-[#130F49]">
                        Customer Testimonials
                    </h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-start gap-16 lg:gap-3 my-10 sm:px-3 px-2">
                    {reviews.map((review, index) => {
                        return (
                            <ReviewCard
                                index={index + 1}
                                key={index}
                                {...review}
                            />
                        );
                    })}
                </div>
                <a href="#reviews mx-auto">
                    <motion.div
                        variants={fadeIn("up", "tween", 1, 1)}
                        className="flex flex-col justify-center  py-5 text-center items-center gap-2"
                    >
                        <h4 className="text-3xl font-black text-[#130F49] my-3.5">
                            Five stars
                        </h4>
                        <img
                            src={stars}
                            alt="trustpilot"
                            className="w-2/12 block object-cover"
                        />
                        <p className="text-2xl">
                            Based on{" "}
                            <span className="underline">8 reviews</span>
                        </p>
                        <img
                            src={trustpilot}
                            alt="trustpilot"
                            className="w-2/12 block object-cover"
                        />
                    </motion.div>
                </a>
            </motion.div>
        </section>
    );
};

export default Feedbacks;
