import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductAds = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Escalas que empiezan más grandes y van disminuyendo (zoom out)
  const decreaseImageSize1 = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);
  const decreaseImageSize2 = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const decreaseImageSize3 = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <section
      ref={container}
      className="flex flex-col items-center justify-center gap-4 w-full h-[300vh] my-[-10rem] z-10"
    >
      {/* Primera imagen */}
      <div className="flex justify-center items-center w-full h-screen sticky top-0 overflow-hidden">
        <motion.img
          src="./images/achievements/img1.jpg"
          alt="Product Ad 1"
          className="w-full h-full object-cover"
          style={{
            scale: decreaseImageSize1,
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div className="absolute z-10 text-white top-[7.5rem] left-[1.5rem]">
          <h2 className="text-7xl font-bold mb-4">Creativity</h2>
          <p className="text-[2rem] max-w-2xl">
            Turning bold visions into experiences
          </p>
        </motion.div>
      </div>

      {/* Segunda imagen */}
      <div className="flex justify-center items-center w-full h-screen sticky top-0 overflow-hidden">
        <motion.img
          src="./images/achievements/img2.png"
          alt="Product Ad 2"
          className="w-full h-full object-cover brightness-80"
          style={{
            scale: decreaseImageSize2,
          }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <motion.div className="absolute z-10 text-white top-[7.5rem] left-[1.5rem]">
          <h2 className="text-7xl font-bold mb-4">Mastery</h2>
          <p className="text-[2rem] max-w-2xl">
            Redefining limits with every project
          </p>
        </motion.div>
      </div>

      {/* Tercera imagen */}
      <div className="flex justify-center items-center w-full h-screen sticky top-0 overflow-hidden">
        <motion.img
          src="./images/achievements/img3.png"
          alt="Product Ad 3"
          className="w-full h-full object-cover"
          style={{
            scale: decreaseImageSize3,
          }}
        />
        <div className="absolute inset-0 bg-black/25"></div>
        <motion.div className="absolute z-10 text-white top-[7.5rem] left-[1.5rem]">
          <h2 className="text-7xl font-bold mb-4">Vision</h2>
          <p className="text-[2rem] max-w-2xl">Designing what comes next</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductAds;
