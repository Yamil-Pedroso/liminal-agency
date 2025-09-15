import React from "react";

type SectionHeader2Props = {
  title?: string;
  subtitle?: string;
  className?: string;
  titleStyle?: string;
  subtitleStyle?: string;
};

const SectionHeader2 = ({
  title,
  subtitle,
  className,
  titleStyle,
  subtitleStyle,
}: SectionHeader2Props) => {
  return (
    <div className={`flex flex-col mb-14 ${className}`}>
      <h2
        className={`text-[#333336] text-[3rem] md:text-[4.5rem] font-semibold text-base/12 md:text-base/16 ${titleStyle}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-[20rem] mx-auto text-[#848a91] text-[1.8rem] md:text-[2.1rem] font-semibold md:mx-0  md:max-w-[50rem] text-base/10 mt-6  ${subtitleStyle}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader2;
