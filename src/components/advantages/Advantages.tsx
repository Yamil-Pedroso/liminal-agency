import React from "react";
import GridBlock from "@/components/common/grid-blocks/GridBlock";
import { advantagesData } from "@/data/advantagesData";
import SectionHeader from "@/components/common/section-header/SectionHeader";
import SectionHeader2 from "@/components/common/section-header/SectionHeader2";
import HoverUnderlineLink from "@/components/common/hovers/HoverUnderlineLink";
import Marquee from "react-fast-marquee";
import { IconType } from "react-icons/lib";

const marqueeLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const Advantages = () => {
  const icons = advantagesData[10].icon as IconType[];

  return (
    <div className="flex flex-col w-full min-h-screen bg-white py-[10rem] z-10 px-20">
      <SectionHeader
        title="Why Work With Us"
        subtitle="advantages"
        className="mb-8"
      />

      <SectionHeader2
        title="Collaboration Beyond Projects"
        subtitle="Forget the hiring hassle — access a full creative team on demand"
      />

      <div
        className="grid gap-[0.8rem] mx-auto"
        style={{
          gridTemplateColumns: "32rem 32rem 32rem",
          gridTemplateRows: "650px 320px 310px",
        }}
      >
        {/* Fila 1 */}
        <GridBlock
          height="650px"
          // Dame un responsive grid que ocupe toda la pantalla
          className="col-start-1 row-start-1 row-span-1 relative  "
          background="bg-gradient-to-br from-[#c4c7c6] to-[#e5e6e5] "
        >
          <div className="flex flex-col">
            <div className="flex flex-col max-w-[30rem] p-10">
              <h3 className="text-[48px] font-bold text-[#333336]">
                {advantagesData[0].title}
              </h3>
              <p className="text-[1.3125rem] text-[#333336] mt-2">
                {advantagesData[0].subtitle}
              </p>
            </div>
            <img
              src={advantagesData[0].image?.src[0]}
              alt={advantagesData[0].image?.alt}
              className="absolute bottom-[-3rem] left-[-5rem] "
            />
          </div>
        </GridBlock>

        <GridBlock
          height="calc(650px/2 - 0.4rem)"
          className="col-start-2 row-start-1"
          background="bg-[#f6f6f6]"
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-5">
            <h3 className="text-[1.5rem] text-[#333336] font-bold mt-2">
              {advantagesData[1].subtitle?.[0]} -{" "}
              {advantagesData[1].subtitle?.[1]}
            </h3>

            <div className="flex items-center justify-center mt-4 mb-2 gap-6">
              {Array.isArray(advantagesData[1].icon) &&
              advantagesData[1].icon[0] ? (
                <span className="text-[3rem] text-[var(--color-orange-accent)]">
                  {React.createElement(advantagesData[1].icon[0])}
                </span>
              ) : null}
              <span className="text-3xl font-bold"> + </span>
              {Array.isArray(advantagesData[1].icon) &&
              advantagesData[1].icon[1] ? (
                <span className="text-[3rem] text-[var(--color-orange-accent)]">
                  {React.createElement(advantagesData[1].icon[1])}
                </span>
              ) : null}
            </div>

            <p className="max-w-[20rem] text-[2rem] text-[#333336] text-center text-base/9 font-bold">
              {advantagesData[1].title}
            </p>
          </div>
        </GridBlock>

        <GridBlock
          height="calc(650px/2 - 0.4rem)"
          className="col-start-2 row-start-1 self-end bg-[var(--color-orange-accent)] md:"
        >
          <div className="flex flex-col items-center justify-center w-full h-full mt-6">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-white text-4xl">{advantagesData[2].title}</h2>
              <p className="text-white text-1xl max-w-[15rem] text-center">
                {advantagesData[2].subtitle}
              </p>
            </div>
            <div className="w-[19.5rem] h-[13rem] bg-white mt-[3rem] rounded-tl-4xl rounded-tr-4xl"></div>
          </div>
        </GridBlock>

        {/* Block 4 fila 1 */}
        <GridBlock
          height="650px"
          className="col-start-3 row-start-1 row-span-1 xs:col-start-1 xs:row-start-2"
        >
          <div className="relative w-full h-full">
            <img
              src={advantagesData[3].image?.src[0]}
              alt={advantagesData[3].image?.alt}
              className="w-full h-full object-cover brightness-110"
            />
            <div className="absolute bottom-0 left-0 p-10">
              <h2 className="text-[3rem] font-semibold text-[#333336] mb-2">
                {advantagesData[3].title}
              </h2>
              <p className="text-2xl">{advantagesData[3].subtitle}</p>
            </div>
          </div>
        </GridBlock>

        {/* Fila 2 */}
        <GridBlock height="320px" className="col-start-1 row-start-2">
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#FAFAFA]">
            <h2 className="text-[3rem] font-semibold text-[#333336] mb-2">
              {advantagesData[4].title}
            </h2>
            <p className="text-2xl">{advantagesData[4].subtitle}</p>
          </div>
        </GridBlock>

        <GridBlock
          width="15.6rem"
          height="320px"
          className="col-start-2 row-start-2"
        >
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#f6f6f6] gap-3">
            <h2 className="text-[1.0625rem] font-bold text-[#333336] mb-2">
              {advantagesData[5].title}
            </h2>
            <div>
              {Array.isArray(advantagesData[5].icon) && (
                <span className="text-[3rem] text-[var(--color-orange-accent)]">
                  {React.createElement(advantagesData[5].icon[0])}
                </span>
              )}
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-[3.2rem] font-semibold">
                {advantagesData[5].quantity}
                <span>+</span>{" "}
              </p>
              <p className="text-[1.0625rem] text-[#848a91] font-semibold max-w-[9rem] text-center">
                {advantagesData[5].subtitle}
              </p>
            </div>
          </div>
        </GridBlock>

        <GridBlock
          width="15.6rem"
          height="320px"
          className="col-start-2 row-start-2 justify-self-end"
        >
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#f6f6f6] gap-3">
            <h2 className="text-[1.0625rem] font-bold text-[#333336] mb-2">
              {advantagesData[6].title}
            </h2>
            <div>
              {Array.isArray(advantagesData[6].icon) && (
                <span className="text-[3rem] text-[var(--color-orange-accent)]">
                  {React.createElement(advantagesData[6].icon[0])}
                </span>
              )}
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-[3.2rem] font-semibold">
                {advantagesData[6].quantity}
                <span>%</span>{" "}
              </p>
              <p className="text-[1.0625rem] text-[#848a91] font-semibold max-w-[10rem] text-center">
                {advantagesData[6].subtitle}
              </p>
            </div>
          </div>
        </GridBlock>

        <GridBlock height="320px" className="col-start-3 row-start-2">
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#F3F3F3]">
            <h2 className="text-[3rem] font-semibold text-[#333336] mb-2">
              {advantagesData[7].title}
            </h2>
            <p className="text-2xl max-w-[20rem] text-center">
              {advantagesData[7].subtitle}
            </p>
            <div className="w-[20rem] flex justify-center items-center relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#F3F3F3] to-transparent z-10 pointer-events-none" />

              <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#F3F3F3] to-transparent z-10 pointer-events-none" />

              <Marquee
                className="mt-6 w-full h-[3rem] text-[var(--color-orange-accent)]"
                speed={50}
                gradient={false}
                pauseOnHover={true}
              >
                {marqueeLetters.map((letter, index) => (
                  <span key={index} className="text-[2rem] font-bold mx-4">
                    {letter}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </GridBlock>

        {/* Fila 3 */}
        <GridBlock height="310px" className="col-start-1 row-start-3">
          <div
            className="flex flex-col justify-center w-full h-full bg-gradient-to-l from-[#f8fbfd] to-[#eaf1f5]
"
          >
            <div className="flex items-center w-full h-full gap-7 relative">
              <div className="leading-16 absolute left-7 z-10">
                <h2 className="text-[2rem] font-semibold text-[#333336]">
                  {advantagesData[8].title}
                </h2>
                <span className="text-[4rem] text-white">
                  {advantagesData[8].quantity}%
                </span>
                <p className="text-2xl leading-4">
                  {advantagesData[8].subtitle}
                </p>
              </div>
              <div className=" ">
                <img
                  src={advantagesData[8].image?.src[0]}
                  alt={advantagesData[8].image?.alt}
                  className="w-full h-full brightness-110
                   hover:right-0 transition-all duration-500 ease-in-out hover:scale-105
                  "
                />
              </div>
            </div>
          </div>
        </GridBlock>

        <GridBlock height="310px" className="col-start-2 row-start-3">
          <div className="flex flex-col justify-center w-full h-full bg-[#FAFAFA]">
            <h2 className="text-[2rem] font-semibold mb-2 text-[var(--color-orange-accent)]">
              {advantagesData[9].title}
            </h2>
            <p className="max-w-[20rem] text-[1.2rem] text-2xl">
              {advantagesData[9].subtitle}
            </p>
          </div>
        </GridBlock>

        <GridBlock height="310px" className="col-start-3 row-start-3">
          <div className="flex flex-col justify-center w-full h-full bg-[#F3F3F3]">
            {icons && icons[0] && (
              <span className="text-[3rem] mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className="inline-block mr-1 text-2xl text-neutral-600"
                  >
                    {React.createElement(icons[0])}
                  </span>
                ))}
              </span>
            )}

            <h2 className="text-[2rem] font-semibold text-[#333336] mb-2">
              {advantagesData[10].title}
            </h2>
            <div className="flex gap-2">
              <span>{advantagesData[10].quantity}%</span>
              <p>{advantagesData[10].subtitle?.[0]}</p>
            </div>
            <p>{advantagesData[10].subtitle?.[1]}</p>
          </div>
        </GridBlock>
      </div>

      <div className="flex mx-auto items-center text-black text-center mt-20 gap-2.5 p-6">
        <p className="font-display text-5xl ">Ready to build?</p>
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

export default Advantages;
