import FunFactWithMotion from "./FunFactWithMotion";
import { achievementsData } from "@/data/achievementsData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 10,
          mass: 0.6,
        },
      });
    } else {
      controls.start({
        scale: 0.8,
      });
    }
  }, [isInView, controls]);
  return (
    <section className="flex flex-col  gap-4 w-full mt-[20rem] px-12">
      <div className="flex items-center gap-4">
        <h2 className="text-[#C0C0C0]">Our Impact |</h2>{" "}
        <span className="text-[2rem] font-light text-[#8a8a91]">
          metrics & milestones
        </span>
      </div>
      <div className="w-[90%] h-[1px] bg-[#464648]" />

      <div className="max-w-[70rem]">
        <h2 className="text-[5rem] text-[#f6f6f6] text-base/23">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>
        <p className="text-[2rem] text-[#C0C0C0]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      <div className="flex mt-30 gap-16">
        <div className="text-[#C0C0C0] w-[50%] h-[30rem] overflow-hidden relative">
          <img
            className="w-full h-full object-cover "
            src="./images/achievements/img5.png"
            alt="Achievements"
          />
          <motion.button
            ref={ref}
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            animate={controls}
            className="
             absolute
             left-1/2 top-1/2
             -translate-x-1/2 -translate-y-1/2
            bg-gray-200/40
            backdrop-blur-md
            border border-gray-300/30
            rounded-full
            px-6 py-4
            text-[3.5rem]
            font-bold
            whitespace-nowrap
            text-gray-100
            hover:bg-gray-200/30
            hover:border-gray-300/50
            transition-all duration-500
            shadow-2xl
            backdrop-saturate-150

             "
          >
            Premium link
          </motion.button>
        </div>

        <div className="flex items-center w-[50%] gap-22">
          <div className="flex items-center h-[20rem] gap-10">
            <div className="flex flex-col gap-4 max-w-[30rem]">
              <p className="text-[#C0C0C0]">
                OUTSTANDING DIGITAL EXPERIENCE 2025
              </p>
              <h2 className="text-[3rem] text-[#f6f6f6]">
                Boreal VR Activation
              </h2>
              <p className="text-[#C0C0C0] max-w-[26rem]">
                Liminal is proud to celebrate our recognition at the Canned Lynx
                Awards, honored for delivering an immersive campaign in
                collaboration with leading VR innovator, Boreal.
              </p>
              <p className="text-[#C0C0C0]">explore case study</p>
            </div>

            <div className="h-full border-l-1 border-dashed border-[#5b5b5b] ml-24"></div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[#C0C0C0]">audience retention</p>
                <span className="text-[4rem] text-[#f6f6f6]">50%</span>
              </div>
              <div>
                <p className="text-[#C0C0C0]">business uplift</p>
                <span className="text-[4rem] text-[#f6f6f6]">30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center mt-20">
        {achievementsData.map((item, idx) => (
          <>
            {idx > 0 && (
              <div className="h-28 border-l-2 border-dashed border-[#5b5b5b]" />
            )}
            <div className="flex flex-col items-center " key={idx}>
              <p className="max-w-[15rem] text-[2rem] text-[#8A8A91] font-light text-base/9 text-center">
                {item.title}
              </p>

              <FunFactWithMotion
                key={item.title}
                to={item.quantity as number}
                duration={1.5}
              />
            </div>
          </>
        ))}
      </div>

      <div className="flex justify-center items-center mt-20 text-white">
        Marquee moviment slider with the sponsors logos
      </div>
    </section>
  );
};

export default Achievements;
