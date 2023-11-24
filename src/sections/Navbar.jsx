import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navVariants } from "../untils/motion";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (toggle) document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "unset");
    }, [toggle]);
    const connectBtnStyl =
        "bg-[#130f49] rounded-lg  px-4 p-2 text-center text-white";

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.paddingX} w-full flex items-center py-8`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-9 h-9 object-contain z-50"
                        onClick={() => {
                            window.scrollTo(0, 0);
                            setToggle(toggle ? !toggle : false);
                        }}
                    />
                </Link>
                <ul className="list-none hidden lg:flex flex-row items-center gap-10">
                    {navLinks.map((link, index) => (
                        <li
                            key={link.id}
                            className={`hover:blue-900 hover:scale-125 text-[18px] font-medium cursor-pointer ${
                                index == navLinks.length - 1
                                    ? connectBtnStyl
                                    : ""
                            }`}
                            onClick={() => {
                                setActive(link.title);
                                setToggle(!toggle);
                            }}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden">
                    <img
                        src={!toggle ? menu : close}
                        alt="menu"
                        className="z-50"
                        onClick={() => setToggle(!toggle)}
                    />
                    {toggle && (
                        <div className="fixed inset-0 overflow-y-hidden h-screen w-screen z-30 overflow-hidden bg-white mt-24">
                            <ul className="list-none flex flex-col pl-5">
                                {navLinks.map(link => (
                                    <li
                                        key={link.id}
                                        className="hover:blue-500 text-[18px] font-medium cursor-pointer border-t border-b py-3"
                                        onClick={() => {
                                            setActive(link.title);
                                            setToggle(!toggle);
                                        }}
                                    >
                                        <a
                                            href={`#${link.id}`}
                                            className="text-2xl md:text-3xl"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
