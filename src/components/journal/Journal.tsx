import { useState } from "react";
import SectionHeader from "@/components/common/section-header/SectionHeader";
import SectionHeader2 from "@/components/common/section-header/SectionHeader2";
import GridBlock from "@/components/common/grid-blocks/GridBlock";
import GridBlockWithHover from "@/components/common/hovers/GridBlockWithHover";
import { insightsData } from "@/data/insightsData";
import HoverUnderlineLink from "@/components/common/hovers/HoverUnderlineLink";
import { motion } from "framer-motion";

const Insights = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  return (
    <div className="flex flex-col w-full  bg-white z-10 px-20">
      <SectionHeader
        title="Creative Dispatch"
        subtitle="insights"
        className="mb-8"
      />
      <SectionHeader2
        title="Ideas, experiments, and stories behind our work"
        subtitle="Explore thoughtful perspectives, lessons learned, and inspirations that shape our creative process"
        className="flex max-w-[70rem]"
        titleStyle="text-base/19"
        subtitleStyle="mt-[1rem]"
      />

      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-2 gap-10">
          {insightsData.map((item, index) => (
            <GridBlockWithHover key={index}>
              <GridBlock
                width="48rem"
                height="31.25rem"
                background="none"
                className="relative overflow-hidden"
              >
                <div className="w-full h-full flex flex-col justify-between relative">
                  <img
                    src={item.image?.src}
                    alt={item.image?.alt}
                    className={`w-full h-full object-cover `}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      transition: "filter 0.3s ease",
                      filter:
                        hoveredIndex === index
                          ? "blur(5px) brightness(80%)"
                          : "none",
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -70 }}
                    animate={
                      hoveredIndex === index
                        ? { opacity: 1, y: 0, scale: 1.2 }
                        : { opacity: 0, y: -50 }
                    }
                    transition={{ duration: 0.4 }}
                    className="absolute flex flex-col gap-1 text-white top-[1.8rem] left-[6rem] z-30"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <p className="text-[1.125rem] font-semibold">
                      Written by {item.author}
                    </p>
                    <p className="text-[0.875rem]">{item.date}</p>
                  </motion.div>

                  <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10 pointer-events-none" />

                  <div className="absolute bottom-[-5rem] left-0 px-20 w-full flex flex-col justify-end z-20">
                    <motion.div
                      animate={{
                        y: hoveredIndex === index ? -100 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-2"
                    >
                      <h3 className="text-[2.1875rem] font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-[1.1875rem] text-white">
                        {item.subtitle}
                      </p>

                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                          hoveredIndex === index
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.3 }}
                        className="text-[1rem] text-white"
                      >
                        {item.description}
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              </GridBlock>
            </GridBlockWithHover>
          ))}
        </div>
      </div>

      <div className="flex mx-auto items-center text-black text-center mt-20 gap-2.5 p-6">
        <p className="font-display text-5xl ">Enter the Liminal Archive</p>
        <div className="w-px h-12 bg-[#6f6f6f]"></div>

        <div className="text-3xl flex">
          <div className="text-3xl flex gap-4">
            <HoverUnderlineLink text="Popular" />
            <HoverUnderlineLink text="Editor's pick" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
