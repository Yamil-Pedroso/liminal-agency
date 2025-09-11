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
    <section className="flex flex-col gap-4 w-full mt-[20rem] px-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col text-center items-center lg:flex-row gap-4">
          <h2 className="flex text-[#C0C0C0] underline underline-offset-10 lg:no-underline lg:text-[2rem]">
            Our Impact
          </h2>{" "}
          <div className="hidden h-10 border-l-1 border-white ml-2 lg:block"></div>
          <span className="text-[2rem] lg:text-[1.0625rem] font-light text-[#8a8a91]">
            metrics & milestones
          </span>
        </div>

        <div className=" h-[1px] bg-[#464648]" />

        <div className="max-w-[70rem] flex flex-col text-center lg:text-left gap-2">
          <h2 className="text-[2.5rem] text-base/11 lg:text-[5rem] text-[#f6f6f6] lg:text-base/23">
            Every figure hides the rhythm of a human story.
          </h2>
          <p className="text-[1.5rem] lg:text-[2rem] text-[#C0C0C0]">
            Reinventing industries, pixel by flawless pixel.
          </p>
        </div>
      </div>

      <div className="mx-auto flex flex-col justify-center 2xl:flex-row mt-10 lg:mt-30 gap-16">
        <div className="text-[#C0C0C0] w-full h-[40rem] 2xl:w-[50%] 2xl:h-[30rem] overflow-hidden relative">
          <img
            className="w-full 2xl:w-full 2xl:h-full object-cover "
            src="./images/achievements/img5.png"
            alt="Achievements"
          />
          <motion.button
            ref={ref}
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            animate={controls}
            className="
             absolute top-1/2 left-1/2
             2xl:left-1/2 2xl:top-1/2
             -translate-x-1/2 -translate-y-1/2
            bg-gray-200/40
            backdrop-blur-md
            border border-gray-300/30
            rounded-full
            px-7 py-2 -my-24
            text-[3rem]
            lg:mt-20 2xl:mt-0
            2xl:px-6 2xl:py-4
            lg:text-[5rem]
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

        <div className="flex items-center justify-center 2xl:w-[50%] gap-22 ">
          <div className="flex flex-col justify-center mt-15 lg:w-full lg:justify-between lg:flex-row 2xl:items-center h-[20rem] gap-10 ">
            <div className="flex flex-col text-center gap-4 lg:text-left 2xl:max-w-[30rem]">
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
              <p className="text-white text-[1.5rem]">explore case study</p>
            </div>

            <div className="h-full flex justify-center gap-14 lg:mr-20 2xl:mr-0">
              <div className="h-full border-l-1 border-dashed border-[#5b5b5b] ml-24 hidden lg:block"></div>
              <div className="w-full flex justify-between  lg:justify-around lg:flex-col ">
                <div>
                  <p className="text-[var(--color-accent)] uppercase">
                    audience retention
                  </p>
                  <span className="text-[4rem] text-[#f6f6f6]">50%</span>
                </div>
                <div>
                  <p className="text-[var(--color-accent)] uppercase">
                    business uplift
                  </p>
                  <span className="text-[4rem] text-[#f6f6f6]">30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around items-center mt-30 lg:mt-20 gap-20 lg:gap-10">
        {achievementsData.map((item, idx) => (
          <>
            {idx > 0 && (
              <div className="h-28 border-l-2 border-dashed border-[#5b5b5b] hidden lg:block" />
            )}
            <div className="flex flex-col items-center" key={idx}>
              <p className="max-w-[12rem] lg:max-w-[15rem] uppercase  text-[#8A8A91] font-light text-base/6 text-center">
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
