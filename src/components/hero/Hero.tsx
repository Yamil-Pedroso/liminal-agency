import { useState, useRef, useEffect } from "react";
import { heroSection } from "@/data/heroSection";
import { MotionValue, useAnimation } from "framer-motion";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { useMenu } from "@/components/context/MenuContext";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { GoPlus } from "react-icons/go";

const Hero = () => {
  const { isOpenMenu } = useMenu();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { scrollY } = useScroll();

  const iconControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Primero animación de entrada
      await iconControls.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 0.5,
          delay: 3,
        },
      });

      // Espera 5 segundos
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Luego animación de rotación
      await iconControls.start({
        rotate: 360,
        transition: { duration: 0.6 },
      });
    };

    sequence();
  }, [iconControls]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsFixed(latest > 400);
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  //const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 32]);

  const fontSize = useTransform(scrollY, [0, 400], ["30rem", "2.5rem"]);
  const yPosition = useTransform(
    scrollY,
    [0, 400],
    [0, -window.innerHeight * 0.5 + 50]
  );
  const xOffset = useTransform(scrollY, [0, 200, 400], [0, 20, 0]);

  const rawY = useTransform(scrollY, [0, 150, 400], [0, -10, -60]);
  const rawOpacity = useTransform(scrollY, [0, 80, 160], [1, 0.2, 0]);

  const subY = useSpring(rawY, { stiffness: 50, damping: 10, mass: 0.5 });
  const subOpacity = useSpring(rawOpacity, { stiffness: 300, damping: 20 });

  const moveProgress = useTransform(
    scrollY,
    [30, window.innerHeight / 2 - 80],
    [0, 1]
  );
  const iconOpacity = useTransform(moveProgress, [0.4, 0.8], [1, 0]);

  const iconCount = 16;
  const xTransforms: MotionValue<number>[] = [];
  const yTransforms: MotionValue<number>[] = [];

  for (let i = 0; i < iconCount; i++) {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const offsetX = (col - 1.5) * 538; // mayor separación horizontal
    const offsetY = (row - 1.5) * 240; // mayor separación vertical

    const xRaw = useTransform(moveProgress, [0, 1], [offsetX, 0]);
    const yRaw = useTransform(moveProgress, [0, 1], [offsetY, 0]);

    const xSpring = useSpring(xRaw, {
      stiffness: 40,
      damping: 10,
      mass: 0.7,
    });

    const ySpring = useSpring(yRaw, {
      stiffness: 40,
      damping: 10,
      mass: 0.7,
    });

    xTransforms.push(xSpring);
    yTransforms.push(ySpring);
  }

  const fontSizeSpring = useSpring(fontSize, {
    stiffness: 50,
    damping: 14,
    mass: 0.7,
  });

  const xOffsetSpring = useSpring(xOffset, {
    stiffness: 40,
    damping: 12,
    mass: 0.7,
  });

  const yPositionSpring = useSpring(yPosition, {
    stiffness: 40,
    damping: 12,
    mass: 0.7,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full flex items-center justify-center relative">
          {Array.from({ length: iconCount }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                x: xTransforms[i],
                y: yTransforms[i],
                opacity: iconOpacity,
              }}
            >
              <GoPlus className="text-white/40 w-8 h-8" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        style={{
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }}
        className="overflow-hidden w-full h-full"
        initial={{ scale: 1.6, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 25,
          mass: 1.2,
          delay: 0.4,
        }}
      >
        <motion.img
          src={heroSection.image?.src}
          alt={`Hero `}
          animate={{}}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 20,
            mass: 0.7,
            ease: "easeInOut",
          }}
          className={`w-full h-full object-cover absolute top-0 left-0 brightness-110

              `}
          style={{ scale }}
        />
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start pt-[20vh] text-white bg-black/20 px-28">
        <div className="flex justify-between w-full">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              mass: 0.5,
              delay: 0.2,
            }}
            style={{ opacity: subOpacity, y: subY }}
            className="max-w-[810px] relative"
          >
            <motion.h2 className="text-[4.5rem] text-base/18">
              {heroSection.subtitle?.[0]}
            </motion.h2>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 0.5,
                delay: 1.5,
              }}
              className="max-w-[28rem] text-[2rem] mt-6 text-base/10"
            >
              {heroSection.subtitle?.[1]}
            </motion.h2>

            <motion.div
              initial={{ y: 500, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 12,
                mass: 0.9,
                delay: 2,
              }}
              className="absolute bottom-[-6rem]"
            >
              <GoPlus className="text-orange-accent w-full h-full text-7xl" />
            </motion.div>
          </motion.div>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              mass: 0.5,
              delay: 0.5,
            }}
            className="max-w-[28rem] text-[5.6rem] text-center font-display text-base/16 mt-3.5 relative"
          >
            {heroSection.subtitle?.[2]}
          </motion.h2>
          <motion.div
            initial={{ y: 100, opacity: 0, rotate: 0 }}
            animate={iconControls}
            className="absolute right-[9rem] top-[18rem]"
          >
            <TbTriangleSquareCircleFilled className=" text-white w-12 h-12 " />
          </motion.div>
        </div>

        <motion.h1
          onClick={handleClick}
          initial={{ scale: 0.2, opacity: 1, y: 100, x: 0 }}
          animate={{
            scale: 1,
            transform: isOpenMenu ? "translateY(100px)" : "translateY(0px)",
            opacity: isOpenMenu ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 12,
            mass: 1.2,
            delay: 0.2,
          }}
          className={`font-bold text-[#ff4401] leading-none ${
            isOpenMenu ? "z-0" : "z-50"
          } ${
            isFixed
              ? "fixed top-6 left-1/2 -translate-x-1/2"
              : "absolute bottom-0 left-1/2 -translate-x-1/2"
          }`}
          style={{
            pointerEvents: isOpenMenu ? "none" : "auto",
            fontSize: fontSizeSpring,
            y: isFixed ? 0 : yPositionSpring,
            x: isFixed ? 0 : xOffsetSpring,
          }}
        >
          {heroSection.title}
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
