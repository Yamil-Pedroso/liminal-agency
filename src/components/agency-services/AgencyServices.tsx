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
      className="relative flex justify-center w-screen"
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
        className="fixed bottom-[-50rem] hidden pointer-events-none overflow-hidden bg-white xl:block"
      ></motion.div>

      {/* Texto animado */}
      <div className="flex flex-col justify-center">
        <motion.div
          style={{
            scale: titleScale,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
          className="hidden mx-auto m-0 max-w-[40rem] p-0 text-[3rem] leading-none font-bold xl:block 2xl:text-[5rem]"
        >
          <motion.h2 className="text-center font-extrabold">
            what we offer
          </motion.h2>
          <h3 className="m-0 max-w-[20rem] p-0 text-center text-base/6 leading-none font-bold text-[#848484] 2xl:max-w-[30rem] 2xl:text-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing voluptatum.
          </h3>
        </motion.div>
        {/* Grid Container */}

        <div className="z-10 flex w-screen flex-col justify-center gap-16 bg-white mt-[5rem] xl:mt-[16rem]">
          <div className="mt-14 mb-[-3rem] flex flex-col items-center justify-center text-center xl:hidden">
            <h2 className="font-bold text-[3.5rem] sm:text-[5rem] md:text-[7rem] transition-all duration-300 ease-in-out">
              what we offer
            </h2>
            <h3 className="font-bold text-base/9 text-[1.5rem] text-accent max-w-[20rem] sm:max-w-[47rem] sm:text-[2rem] transition-all duration-300 ease-in-out">
              Lorem ipsum dolor sit amet consectetur adipisicing voluptatum.
            </h3>
          </div>
          <div className="bg-white p-10">
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
                className="grid w-full justify-items-center text-center grid-cols-1 xl:grid-cols-[1fr_2fr_1fr]  xl:justify-items-stretch
        xl:text-left border-b border-[#d6d6d6] py-12 last:border-b-0 "
              >
                {/* Title */}
                <div className="flex items-start xl:ml-12 text-black">
                  <span className="flex items-center my-[-1rem] text-[1.5rem] font-bold text-orange-accent">
                    [<span className="mt-[.2rem]">{service.number}</span>]
                  </span>
                  <div className="flex items-center gap-2">
                    <h2 className="ml-4.5 whitespace-nowrap text-4xl xl:text-5xl font-medium">
                      {service.title}
                    </h2>
                    <span className="mt-[.5rem] w-[2rem] h-[3px] xl:w-[3rem] xl:h-[4px] bg-black"></span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex xl:items-start justify-center mt-5 xl:mt-0">
                  <p className="max-w-[600px] text-base/10 xl:text-left text-[1.8rem]  xl:text-[2rem] xl:font-bold text-[#b9b9b9]">
                    {service.description}
                  </p>
                </div>

                {/* Subtitles */}
                <div className="flex justify-end mt-5 xl:mt-0 xl:mr-12 text-black">
                  <ul className="xl:text-right space-y-2">
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
          <div className="mx-auto flex flex-col items-center gap-6 p-6 text-center text-black xl:flex-row xl:mt-20">
            <p className="font-display text-5xl underline underline-offset-[.8rem] decoration-1 decoration-accent">
              Time to create?
            </p>
            <div className="h-12 w-px bg-[#6f6f6f] hidden xl:block"></div>

            <div className="flex">
              <div className="flex gap-4 ">
                <HoverUnderlineLink
                  classNameText="!text-2xl xl:!text-3xl"
                  text="discover our craft"
                />
                <HoverUnderlineLink
                  classNameText="!text-2xl xl:!text-3xl"
                  text="choose a plan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyServices;
