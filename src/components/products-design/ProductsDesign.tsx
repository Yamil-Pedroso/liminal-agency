import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AIVideo from "@/components/video/AIVideo";

const ProductsDesign = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Transformaciones para mover las imágenes hacia arriba
  const yLeft1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yRight1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const yLeft2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yRight2 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const yLeft3 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const yRight3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const decreaseMainImageSize = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const increaseTextSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["6rem", "10rem"]
  );
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative">
      {/* Container con altura extendida para permitir el scroll */}
      <div
        ref={container}
        className="relative w-full h-[200vh] bg-gradient-to-b  to-black"
      >
        {/* Imagen central fija */}
        <div className="sticky top-[15vh] z-1 h-[70vh] w-[60vw] mx-auto flex items-center justify-center">
          <div className="relative h-full w-full rounded-xl shadow-2xl overflow-hidden">
            <motion.p
              className="absolute  text-white  font-bold text-center flex items-center justify-center h-full max-w-full  left-1/2 -translate-x-1/2"
              style={{ fontSize: increaseTextSize, opacity: textOpacity }}
            >
              <span className="text-8xl">
                Crafting moments for now & visions for beyond.
              </span>
            </motion.p>
            {/*<motion.img
              style={{ scale: decreaseMainImageSize }}
              src="./images/productsDesign/img1.jpg"
              alt="Producto Central"
              className="h-full w-full object-cover"
            />*/}
            <AIVideo
              src="./videos/ai-smoke.mp4"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Imágenes flotantes que se mueven hacia arriba */}
        {/* Grupo izquierdo 1 */}
        <motion.div
          style={{ y: yLeft1 }}
          className="absolute left-[-12%] top-[20%] z-[1]"
        >
          <div className="h-[25vh] w-[15vw] bg-white rounded-lg shadow-lg overflow-hidden transform rotate-[-10deg]">
            <img
              src="./images/productsDesign/img2.jpg"
              alt="Producto 1"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Grupo derecho 1 */}
        <motion.div
          style={{ y: yRight1 }}
          className="absolute right-[-12%] top-[25%] z-[1]"
        >
          <div className="h-[20vh] w-[12vw] bg-white rounded-lg shadow-lg overflow-hidden transform rotate-[8deg]">
            <img
              src="./images/productsDesign/img3.jpg"
              alt="Producto 2"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Grupo izquierdo 2 */}
        <motion.div
          style={{ y: yLeft2 }}
          className="absolute left-[-10%] top-[60%] z-[1]"
        >
          <div className="h-[28vh] w-[16vw] bg-white rounded-lg shadow-lg overflow-hidden transform rotate-[5deg]">
            <img
              src="./images/productsDesign/img4.jpg"
              alt="Producto 3"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Grupo derecho 2 */}
        <motion.div
          style={{ y: yRight2 }}
          className="absolute right-[-10%] top-[55%] z-[1]"
        >
          <div className="h-[22vh] w-[14vw] bg-white rounded-lg shadow-lg overflow-hidden transform rotate-[-12deg]">
            <img
              src="./images/productsDesign/img5.jpg"
              alt="Producto 4"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Grupo izquierdo 3 */}
        <motion.div
          style={{ y: yLeft3 }}
          className="absolute left-[-8%] top-[90%] z-[1]"
        >
          <div className="h-[24vh] w-[13vw] bg-white rounded-lg shadow-lg overflow-hidden transform rotate-[-5deg]">
            <img
              src="./images/productsDesign/img6.jpg"
              alt="Producto 5"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Grupo derecho 3 */}
        <motion.div
          style={{ y: yRight3 }}
          className="absolute right-[-8%] top-[85%] z-[1]"
        >
          <div className="h-[26vh] w-[15vw] bg-white rounded-lg shadow-lg overflow-hidden transform rotate-[15deg]">
            <img
              src="./images/productsDesign/img7.jpg"
              alt="Producto 6"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Elementos decorativos adicionales */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute left-[25%] top-[40%] z-[0] opacity-30"
        >
          <div className="w-32 h-32 bg-blue-500 rounded-full blur-xl"></div>
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -350]) }}
          className="absolute right-[25%] top-[70%] z-[0] opacity-20"
        >
          <div className="w-40 h-40 bg-purple-500 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsDesign;
