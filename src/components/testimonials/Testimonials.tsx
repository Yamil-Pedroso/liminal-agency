import SectionHeader from "../common/section-header/SectionHeader";
import SectionHeader2 from "../common/section-header/SectionHeader2";
import Marquee from "react-fast-marquee";
import GridBlock from "../common/grid-blocks/GridBlock";
import { testimonialsData } from "@/data/testimonialsData";
import { FaQuoteLeft } from "react-icons/fa";
import HoverUnderlineLink from "@/components/common/hovers/HoverUnderlineLink";

const Testimonials = () => {
  return (
    <div className="flex flex-col w-full  bg-white py-[10rem] z-10 px-20">
      <SectionHeader
        title="Voices of Trust"
        subtitle="testimonials"
        className="mb-8"
      />

      <SectionHeader2
        title="Real stories from satisfied partners"
        subtitle="Discover how our creative solutions helped them thrive"
        className="flex max-w-[70rem]"
        titleStyle="text-base/19"
        subtitleStyle="mt-[1rem]"
      />

      <div className="flex justify-between h-[500px]">
        <div className="w-[29rem] bg-gray-600 h-full overflow-hidden">
          <img
            src="/images/testimonials/img1.png"
            alt="Testimonials"
            className="w-[32rem] h-full"
          />
        </div>

        <div className="relative w-full h-full overflow-hidden">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <Marquee
            className="h-full"
            speed={50}
            gradient={false}
            pauseOnHover={true}
          >
            {testimonialsData.map((testimonial, index) => (
              <GridBlock
                key={index}
                width="25rem"
                height="500px"
                background="bg-white"
                className="p-0 ml-14"
              >
                <div className="flex flex-col justify-between bg-[#efefef] p-7 h-full w-full">
                  <div>
                    <div className="flex">
                      <FaQuoteLeft className="text-[1.6rem] text-[#FF6A13] " />
                    </div>
                    <p className="text-[1.3125rem] text-base/7 mt-3">
                      {testimonial.testimonial}
                    </p>
                  </div>

                  <div className="flex  justify-between items-end">
                    <div>
                      <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden mb-5">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-[2.1875rem] text-[#333336] font-normal text-base/9 max-w-[8rem]">
                        {testimonial.name}
                      </h3>
                    </div>

                    <div className="flex flex-col  text-right">
                      <p className="text-[1.0625rem] text-[#333336] whitespace-nowrap">
                        {testimonial.position}
                      </p>
                      {testimonial.company && (
                        <p className="text-[1.0625rem] text-[#8A8A91]">
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </GridBlock>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="flex mx-auto items-center text-black text-center mt-20 gap-2.5 p-6">
        <p className="font-display text-5xl ">Ready to elevate your brand?</p>
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

export default Testimonials;
