import { aboutIntroData } from "@/data/aboutIntroData";
//import AGVision from "@/components/about-agency/agency-vision/AGVision";

const Intro = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#ffffff] z-10 relative">
      <div className="w-full flex justify-between px-18 py-55">
        <div className="flex h-[32rem] flex-col max-w-[32rem]">
          <div>
            <h3 className="text-[#C0C0C0] text-[1.3125rem]">
              {aboutIntroData.title}
            </h3>
            <h2 className="text-[3rem]">{aboutIntroData.title2}</h2>
          </div>

          <div className="flex flex-col mt-auto max-w-[22rem]">
            <div className="w-full h-[1px] bg-[#ededed] mb-4" />
            <p className="text-[#8a8a91] text-[1.3125rem]">
              {aboutIntroData.subtitle?.[0]}
            </p>
          </div>
        </div>

        <div className="max-w-[50rem]">
          <p className="text-[2.1875rem] text-[#121212] text-base/11">
            {aboutIntroData.description}
          </p>

          <div className="flex gap-18 mt-8 text-[1.1875rem]">
            <p className=" text-[#626265] ">{aboutIntroData.subtitle?.[1]}</p>
            <p className=" text-[#626265]">{aboutIntroData.subtitle?.[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
