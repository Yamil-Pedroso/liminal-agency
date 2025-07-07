import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkVisibility = () => {
      setIsHidden(document.body.classList.contains("cursor-hidden"));
    };

    document.addEventListener("mousemove", moveCursor);
    const observer = new MutationObserver(checkVisibility);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Check immediately
    checkVisibility();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          key="cursor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 2,
          }}
          className="fixed z-[9999] pointer-events-none"
          style={{
            top: position.y,
            left: position.x,
            width: "2rem",
            height: "2rem",
            backgroundColor: "#ff4401",
            borderRadius: "0.25rem",
            transform: "translate(-50%, -50%)",
            position: "fixed",
            mixBlendMode: "difference",
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
