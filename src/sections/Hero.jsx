import { motion } from "framer-motion";
import { TypingText } from "../components";

import { staggerContainer, textVariant, fadeIn } from "../untils/motion";

import { styles } from "../styles";
import { location, kal, heroeOverlay } from "../assets";

const Hero = () => {
    return (
        <section className={`{styles.paddingY} sm:py-16 py-10 pl-6`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="w-full max-w-7xl flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto"
            >
                <motion.div
                    variants={textVariant(1.1)}
                    className="flex flex-col flex-1"
                >
                    <div className="flex items-center gap-3">
                        <img
                            src={location}
                            alt="location"
                            className="w-4 h-4"
                        />
                        {/*<p className="text-gray-400">Chaos Web Designer</p>*/}
                        <TypingText
                            title="Chaos Web Designer"
                            textStyles="text-gray-400"
                        />
                    </div>
                    <h1 className={`${styles.heroHeadText} text-[#130F49]`}>
                        I Build Custom{" "}
                        <span className="text-blue-800">
                            Website Solutions{" "}
                        </span>
                        That Help Your{" "}
                        <span className="text-blue-800">Business Grow</span>
                    </h1>
                    <p className="text-[#130F49] font-light text-[18px] my-6">
                        I help you increase conversion and{" "}
                        <br className="md:hidden" /> performance in every
                        possible way.
                    </p>
                    <div className="flex justify-start items-center gap-6 mt-3">
                        <a href="#portfolio">
                            <button className="py-4 px-9 text-white text-center bg-[#130F49] rounded-xl">
                                See my work
                            </button>
                        </a>
                        <a href="#contact">
                            <button className="py-4 px-9 text-white text-center bg-blue-600 rounded-xl">
                                start a project
                            </button>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", "spring", 1, 1)}
                    className="flex-1 mt-10 pr-6 lg:py-5 relative md:mt-16"
                >
                    <img
                        src={kal}
                        alt="Kal photo"
                        className="w-full block rounded-full lg:rounded-tr-none aspect-square  object-cover bg-sky-100"
                    />
                    <img
                        src={heroeOverlay}
                        alt="heroe image overlay"
                        className="absolute top-0 left-10 hidden lg:block"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
