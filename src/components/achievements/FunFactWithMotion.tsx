import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

type FunFactProps = {
  to: number;
  duration?: number;
  isTwo?: boolean;
};

const FunFactWithMotion: React.FC<FunFactProps> = ({ to, duration = 1.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  const numberString = String(to);
  const digits = numberString.split("");

  const counts = digits.map(() => useMotionValue(0));

  const rounded = counts.map((count) =>
    useTransform(count, (latest) => Math.floor(latest % 10))
  );

  useEffect(() => {
    if (isInView) {
      counts.forEach((count, index) => {
        count.set(0);
        const finalDigit = parseInt(digits[index]);

        const controls = animate(count, finalDigit, {
          duration: duration - index * 0.9,
          ease: "easeOut",
        });

        return () => controls.stop();
      });
    } else {
      counts.forEach((count) => count.set(0));
    }
  }, [isInView, to, digits, counts, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex items-center">
        {rounded.map((digit, index) => (
          <div key={index} className="flex justify-center items-center">
            <motion.span className="text-[6rem] font-light text-[#C0C0C0]">
              {digit}
            </motion.span>
          </div>
        ))}
        <span className="text-[#C0C0C0] text-8xl">
          {digits.length > 1 ? "+" : ""}
        </span>
      </div>
    </motion.div>
  );
};

export default FunFactWithMotion;
