import { motion } from "framer-motion";

import { PortfolioCard, TitleText } from "../components";
import { projects } from "../constants";
import { styles } from "../styles";
import { staggerContainer } from "../untils/motion";

const Portfolio = () => {
    return (
        <section className={`${styles.paddingY}`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="w-full max-w-7xl mx-auto"
                id="portfolio"
            >
                <div className="w-full relative pt-24">
                    <div className="absolute top-0 right-0 w-[70%] py-56 rounded-l-[3.5rem] bg-red-300 z-0" />
                    <div className="z-10 relative px-4">
                        <TitleText
                            title="PORTFOLIO"
                            textStyles="text-sm"
                        />
                        <TitleText
                            title="Recent Work"
                            textStyles="text-[#130F49] text-5xl font-black mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {projects.map((card, index) => {
                                return (
                                    <PortfolioCard
                                        key={index}
                                        index={index}
                                        last={index == projects.length - 1}
                                        {...card}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
