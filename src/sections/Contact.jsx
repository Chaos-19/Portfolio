import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../untils/motion";

import { styles } from "../styles";
import { email } from "../assets";
const Contact = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`{styles.paddingY} py-8`}
            id="contact"
        >
            <motion.div
                variants={fadeIn("up", "tween", 0.5, 0.75)}
                className="w-full max-w-7xl mx-auto sm:px-3 px-2 "
            >
                <div className="rounded-2xl sm:px-3 px-2 bg-sky-100 py-16 md:py-20">
                    <div className="flex flex-col justify-center py-5 text-center">
                        <p className="text-sm text-gray-600 mb-5">CONTACT ME</p>
                        <h2 className="md:text-3xl text-4xl font-black text-[#130F49] mb-5">
                            Got a Project? Lets Talk!
                        </h2>
                    </div>
                    <div className="flex justify-center items-center gap-3 md:text-3xl text-md md:my-8">
                        <img
                            src={email}
                            alt="email icon"
                            className="w-[32px] h-[32px] md:w-auto md:h-auto"
                        />{" "}
                        <a
                            href="mailto:kalgetachew375@gmail.com?subject=Feedback&body=Messag"
                            className="text-gray-400 font-bold font-serif"
                        >
                            kalgetachew375@gmail.com
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Contact;
