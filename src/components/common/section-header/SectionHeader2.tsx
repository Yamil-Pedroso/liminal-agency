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
        className={`text-[#333336] text-[4.5rem] font-semibold ${titleStyle}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[#848a91] text-[2.1rem] font-semibold max-w-[50rem] text-base/11 ${subtitleStyle}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader2;
