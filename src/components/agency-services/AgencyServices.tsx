import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { agencyServicesData } from "@/data/agencyServicesData";
import HoverUnderlineLink from "@/components/common/hovers/HoverUnderlineLink";

const AgencyServices = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.1], ["0vw", "150vw"]);
  const height = useTransform(scrollYProgress, [0, 0.1], ["10vh", "250vh"]);
  //const titleScale = useTransform(scrollYProgress, [0, 0.9], [0, 20]);
  const yTranslate = useTransform(scrollYProgress, [0.1, 1], [0, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.1], [0.5, 3]);

  return (
    <section
      ref={containerRef}
      className="w-screen relative flex justify-center"
    >
      {/* Círculo/Elipse blanca */}
      <motion.div
        style={{
          width,
          height,
          y: yTranslate,
          borderTopRightRadius: "50%",
          borderTopLeftRadius: "50%",
          borderBottomRightRadius: "50%",
          borderBottomLeftRadius: "50%",
        }}
        transition={{ duration: 0.2 }}
        className="bg-white bottom-[-50rem] fixed flex justify-center flex-col pointer-events-none overflow-hidden"
      ></motion.div>

      {/* Texto animado */}
      <div className="flex flex-col justify-center ">
        <motion.div
          style={{
            scale: titleScale,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
          className=" text-[5rem] font-bold flex flex-col items-center max-w-[40rem] mx-auto leading-none m-0 p-0"
        >
          <motion.h2 className="font-extrabold text-center ">
            what we offer
          </motion.h2>
          <h3 className="max-w-[30rem] text-[#848484] text-[1.5rem] font-bold text-base/6 text-center leading-none m-0 p-0">
            Lorem ipsum dolor sit amet consectetur adipisicing voluptatum.
          </h3>
        </motion.div>
        {/* Grid Container */}

        <div className="w-screen flex flex-col justify-center gap-16 z-10 bg-white mt-[16rem]">
          <div className="w-full  mx-auto bg-white p-10">
            {agencyServicesData.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                viewport={{ once: false, amount: 0.2 }}
                key={index}
                className="grid grid-cols-[1fr_2fr_1fr] w-full border-b border-[#d6d6d6] py-12 last:border-b-0"
              >
                {/* Title */}
                <div className="flex items-start ml-12 text-black">
                  <span className="flex items-center text-[1.5rem] font-bold text-orange-accent my-[-1rem]">
                    [<span className="mt-[.2rem]">{service.number}</span>]
                  </span>
                  <div className="flex items-center gap-2">
                    <h2 className="text-5xl font-medium ml-4.5 whitespace-nowrap">
                      {service.title}
                    </h2>
                    <span className="w-[3rem] h-[4px] bg-black mt-[.5rem]"></span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex justify-center items-start ">
                  <p className="text-[2rem] max-w-[600px] text-left font-bold text-[#b9b9b9]">
                    {service.description}
                  </p>
                </div>

                {/* Subtitles */}
                <div className="flex justify-end mr-12 text-black">
                  <ul className="space-y-2 text-right">
                    {Array.isArray(service.subtitle) ? (
                      service.subtitle.map((item, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-[1.5rem] text-[#565656]"
                        >
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="text-xl">{service.subtitle}</li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Texto inferior */}
          <div className="flex mx-auto items-center text-black text-center mt-20 gap-2.5 p-6">
            <p className="font-display text-5xl ">Time to create?</p>
            <div className="w-px h-12 bg-[#6f6f6f]"></div>

            <div className="text-3xl flex">
              <div className="text-3xl flex gap-4">
                <HoverUnderlineLink text="discover our craft" />
                <HoverUnderlineLink text="choose a plan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyServices;
