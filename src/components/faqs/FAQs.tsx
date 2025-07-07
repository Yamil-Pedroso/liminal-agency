import { useState } from "react";
import { faqsData } from "@/data/faqsData";
import ToggleAnimation from "@/components/common/toggle-animation/ToggleAnimation";
import SectionHeader from "@/components/common/section-header/SectionHeader";
import SectionHeader2 from "@/components/common/section-header/SectionHeader2";
import HoverUnderlineLink from "@/components/common/hovers/HoverUnderlineLink";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-[10rem] z-10">
      <SectionHeader
        title="Subscription Questions"
        subtitle="faqs"
        className="mb-8"
      />

      <SectionHeader2
        title="Fast and simple insights to your top questions"
        subtitle="Understand how we work and what’s included in our creative services"
        className="flex items-center text-center max-w-[60rem]"
        titleStyle="text-base/19"
        subtitleStyle="mt-[1rem]"
      />
      <div className="flex justify-center w-full gap-[6rem]">
        <div className="flex items-center w-full max-w-4xl ">
          <div className="w-full">
            {faqsData.slice(0, 7).map((faq, index) => (
              <>
                <div className=" h-px bg-gray-200 mb-4" />
                <ToggleAnimation
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  onToggle={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                  }
                  isOpen={activeIndex === index}
                />
              </>
            ))}
            <div className=" h-px bg-gray-200 mb-4" />
          </div>
        </div>
        <div>
          <div className="w-[18rem] h-[23rem] bg-gray-600">
            <img
              src="/images/faqs/img1.png"
              alt="FAQs"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[19rem] mt-6">
            <p className="text-[2.375rem] text-base/12">
              {faqsData[7].question}
            </p>
            <p className="text-[#8A8A91] text-[1.0625rem] text-base/6 mt-6">
              {faqsData[7].answer}
            </p>
          </div>
        </div>
      </div>

      <div className="flex mx-auto items-center text-black text-center mt-20 gap-2.5 p-6">
        <p className="font-display text-5xl ">Still have questions?</p>
        <div className="w-px h-12 bg-[#6f6f6f]"></div>

        <div className="text-3xl flex">
          <div className="text-3xl flex gap-4">
            <HoverUnderlineLink text="discover our craft" />
            <HoverUnderlineLink text="choose a plan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
