import { motion } from "framer-motion";

import { MethodCard, TitleText } from "../components";

import { methods } from "../constants";
import { styles } from "../styles";
import { staggerContainer, slideIn } from "../untils/motion";

const Methodology = () => {
    return (
        <section className={`{styles.paddingY} sm:py-16 py-10 my-5`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="w-full max-w-7xl mx-auto sm:px-3 px-2"
            >
                <div className="flex flex-col justify-center md:flex-row">
                    <motion.div
                        variants={slideIn("left", "tween", 0.2, 1)}
                        className="text-start px-3 md:px-2 flex-1"
                    >
                        <p className="text-sm text-gray-600">METHODOLOGY</p>
                        <TitleText
                            title={"My Process"}
                            textStyles="text-5xl sm:text-4xl font-black md:text-6xl text-[#130F49]"
                        />
                    </motion.div>
                    <div className="flex flex-col gap-3 justify-center flex-[1.5_2_0%] mt-5">
                        {methods.map((method, index) => {
                            return (
                                <MethodCard
                                    key={index + 1}
                                    index={index}
                                    {...method}
                                />
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Methodology;
