import { innovationBrandsData } from "@/data/innovationBrandsData";
import HoverUnderlineLink from "@/components/common/hovers/HoverUnderlineLink";
import Marquee from "react-fast-marquee";

const marqueeLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const InovationBrands = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full h-screen sticky top-0 overflow-hidden bg-[#cccccc] text-white">
      <div className="absolute inset-0 top-[-8rem] flex flex-col justify-center items-center z-10 text-center p-6">
        <div className="text-[7rem] font-bold flex flex-col leading-28">
          <span className="text-white">{innovationBrandsData[0].title}</span>
          <span className="text-[var(--color-orange-accent)]">
            {innovationBrandsData[0].title2}
          </span>
        </div>
        <p className="text-white text-[2rem] max-w-2xl">
          {innovationBrandsData[0].subtitle?.[0]}
        </p>

        <div className="text-3xl flex">
          <div className="text-3xl flex gap-4">
            <HoverUnderlineLink text="book a call" />
            <HoverUnderlineLink text="chat on whatsapp" />
          </div>
        </div>

        <p className="text-white text-[1.5rem] mt-4">
          {innovationBrandsData[0].subtitle?.[1]}
        </p>

        <div className="w-[70rem] flex justify-center items-center relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-transparent z-10 pointer-events-none" />

          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-transparent to-transparent z-10 pointer-events-none" />

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

      <img
        src={innovationBrandsData[0].image?.src}
        alt={innovationBrandsData[0].image?.alt}
        className="w-full h-full object-cover filter grayscale"
      />

      <div className="absolute inset-0 pointer-events-none mix-blend-overlay" />
      <img
        src="/images/innovation-brands/asfalt-light.png"
        alt="Innovation Brands bg"
        className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-30"
      />
    </div>
  );
};

export default InovationBrands;
