export const scaleInView = {
  initial: { scale: 1 },
  whileInView: { scale: 1.1 },
  exit: { scale: 1 },
};

export const fadeInView = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

export const slideUp = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 20,
  },
};
