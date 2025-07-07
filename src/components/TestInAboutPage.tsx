import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "./images/achievements/img1.jpg",
  "./images/achievements/img2.png",
  "./images/achievements/img3.png",
  "./images/achievements/img4.png",
  "./images/achievements/img5.png",
];

const TestInAboutPage = () => {
  const [activeText, setActiveText] = useState(0);

  useEffect(() => {
    const intervalTime = 5000;

    const interval = setInterval(() => {
      setActiveText((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[300px] h-[200px] overflow-hidden relative border-4 border-blue-600">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeText}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
          }}
          src={images[activeText]}
          alt="images"
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

export default TestInAboutPage;
