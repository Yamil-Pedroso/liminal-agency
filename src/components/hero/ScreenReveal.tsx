import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScreenReveal = () => {
  const [isVisible, setIsVisible] = useState(true);
  const stripes = Array.from({ length: 8 });

  useEffect(() => {
    const totalDuration = 0.8 + (stripes.length - 1) * 0.1;
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, totalDuration * 1000);

    return () => clearTimeout(timer);
  }, [stripes.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid grid-cols-1 grid-rows-8 pointer-events-none">
      {stripes.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: (stripes.length - 1 - i) * 0.1,
            ease: "easeInOut",
          }}
          className="bg-white w-full h-full"
        />
      ))}
    </div>
  );
};

export default ScreenReveal;
