import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Celebration = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const decreaseImageSize = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.4, 1, 1]
  );

  const decreaseTextSize = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    ["50rem", "20rem", "20rem"]
  );

  const smoothTextSize = useSpring(decreaseTextSize, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center w-full min-h-screen bg-[#f6f6f6] z-10 relative"
    >
      <motion.h1
        style={{ fontSize: smoothTextSize }}
        className="
    absolute
    left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2

    font-extrabold
    bg-[var(--color-orange-accent)]
    text-transparent
    bg-clip-text
    mix-blend-multiply
    drop-shadow-xl
    select-none
    whitespace-nowrap
    z-30
  "
      >
        Liminal
      </motion.h1>

      <div className="flex justify-center items-center w-full bg-[#cccccc] overflow-hidden">
        <motion.img
          style={{ scale: decreaseImageSize }}
          src="/images/about/celebration/img1.png"
          alt="Celebration"
          className="w-full h-[46rem] relative object-cover"
        />
      </div>
    </div>
  );
};

export default Celebration;
