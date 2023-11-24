import { useState } from "react";

import { motion } from "framer-motion";
import { Card, TitleText } from "../components";

import { staggerContainer } from "../untils/motion";
import { styles } from "../styles";
import { serviceCard } from "../constants";

const Services = () => {
    const [active, setActive] = useState("");

    return (
        <section
            className={`{styles.paddingY} sm:py-16 py-10 my-5 md:mt-32`}
            id="services"
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="w-full max-w-7xl mx-auto sm:px-3 px-2"
            >
                <div className="text-center">
                    <TitleText
                        title={"My Services"}
                        textStyles={styles.sectionHeadText}
                    />
                </div>
                <div
                    className={`${styles.paddingX} grid grid-cols-1  md:grid-cols-2 gap-10 mt-15 pt-8`}
                >
                    {serviceCard.map((card, index) => {
                        return (
                            <Card
                                id={card.title}
                                key={card.title}
                                color={card.color}
                                icon={card.icon}
                                title={card.title}
                                text={card.body}
                                isActive={active}
                                setActive={setActive}
                                index={index + 1}
                            />
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
