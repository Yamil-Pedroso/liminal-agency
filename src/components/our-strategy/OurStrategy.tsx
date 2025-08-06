import {
  strategyHeader,
  strategyContent,
  strategyContentHeader,
} from "@/data/strategyData";

const OurStrategy = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-[#f6f6f6] z-10 relative p-12">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[21px] text-[#C0C0C0]">{strategyHeader.title}</h1>
          <h2 className="text-[48px]">{strategyHeader.title2}</h2>
        </div>

        <div className="w-[65%] gap-10">
          <p className="text-[21px]">{strategyHeader.subtitle?.[0]}</p>
          <p className="text-[35px] text-[#8A8A91]">
            {strategyHeader.subtitle?.[1]}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-12 mx-auto mt-[5rem]">
        {strategyContent.map((img, inx) => (
          <div key={inx}>
            <div className="w-[32rem] h-[46rem] bg-[#cccccc] flex items-center justify-center text-xl overflow-hidden border-2 border-gray-800">
              <img src={img.image?.src} alt={img.image?.alt} />
            </div>
          </div>
        ))}
      </div>

      <section className="flex mt-16 mx-auto gap-18">
        <div className="max-w-[50%] mt-10 space-y-12">
          {strategyContent.map((content, index) => (
            <div key={index} className="flex gap-4">
              <h4 className="text-[28px] font-semibold text-[#C0C0C0]">
                {content.number}
              </h4>
              <p className="text-[21px] text-[#333336]">{content.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="max-w-[50%] flex flex-col mt-12">
          <h3 className="text-[28px] font-semibold text-[#333336]">
            {strategyContentHeader.title}
          </h3>
          <p className="text-[21px] text-[#8A8A91] mt-4">
            {strategyContentHeader.subtitle}
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurStrategy;
