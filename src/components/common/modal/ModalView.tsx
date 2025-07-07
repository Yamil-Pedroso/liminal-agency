import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const text = "⚙️ Web in development";

import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 30,
    },
  },
};

const ModalView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasModalShown = localStorage.getItem("modalShown");

    if (!hasModalShown) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        localStorage.setItem("modalShown", "true");
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <motion.h2
          className="text-4xl font-bold mb-6 flex flex-wrap"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-gray-600 text-2xl"
        >
          This website is currently under development. We are working hard to
          bring you a great experience. Stay tuned for updates!
        </motion.p>
      </Modal>
    </>
  );
};

export default ModalView;
