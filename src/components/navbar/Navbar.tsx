import React from "react";
import Menu from "./Menu";
import { motion, AnimatePresence } from "framer-motion";
//import MenuToggle from "../menu-toggle/MenuToggle";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import ToggleIcon from "../common/toggle-icon/ToggleIcon";
import CurrentPath from "@/utils/CurrentPath";
import { useMenu } from "@/components/context/MenuContext";

interface NavbarProps {
  icons?: IconType[] | string[];
}

const defaultItems: NavbarProps["icons"] = [
  FaWhatsapp,
  FaInstagram,
  AiOutlineLinkedin,
  FaXTwitter,
  MdOutlineMail,
];

const Navbar: React.FC<NavbarProps> = () => {
  const { isOpenMenu, toggleMenu } = useMenu();

  return (
    <header className="p-4 fixed top-0 left-0 w-full z-50">
      <nav className={`flex justify-between items-center`}>
        <ul
          className={`z-[999] lg:inline-flex  ${!isOpenMenu ? "hidden" : "inline-flex"}`}
        >
          {defaultItems.map((icon, index) => (
            <li
              key={index}
              className={`mx-4 lg:w-[3rem] lg:h-[3rem] rounded-full ${isOpenMenu ? "bg-transparent" : "bg-[#3f3f3f]"} flex justify-center items-center hover:scale-70 transition-transform duration-300`}
            >
              <a
                href={`#${icon}`}
                className="text-[#ff4401] hover:scale-210 transition-transform duration-300"
              >
                {React.createElement(icon, {
                  className: "w-6 h-6 sm:w-[2.25rem] sm:h-[2.25rem]",
                })}
              </a>
            </li>
          ))}
        </ul>

        <div className={`z-[999] ml-auto`}>
          <ToggleIcon isOpen={isOpenMenu} toggleMenu={toggleMenu} />
        </div>
      </nav>

      <CurrentPath />

      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full backdrop-blur-md bg-black/65 z-10 overflow-hidden pointer-events-auto"
            style={{
              pointerEvents: isOpenMenu ? "auto" : "none",
            }}
          >
            <Menu />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
