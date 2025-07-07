//import { useState } from "react";
import React from "react";
import { pricingData } from "@/data/pricingData";
import HoverUnderlineLink from "@/components/common/hovers/HoverUnderlineLink";
import { LuAsterisk } from "react-icons/lu";

interface SwitchBtnProps {
  isPro?: boolean;
  setIsPro?: (value: boolean) => void;
}

const SwitchBtn: React.FC<SwitchBtnProps> = ({ isPro, setIsPro }) => {
  //const [isPro, setIsPro] = useState(false);

  const price = isPro ? pricingData.prices.pro : pricingData.prices.core;

  return (
    <div className="flex flex-col items-center gap-4">
      <label className="relative inline-flex items-center select-none">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isPro}
          onChange={() => setIsPro && setIsPro(!isPro)}
        />
        <div
          className="
            w-[16rem] h-[52px]
            border-[1px] border-black
            rounded-full
            overflow-hidden
            relative
            text-black
            font-semibold
          "
        >
          {/* Switch handle */}
          <div
            className={`
              absolute top-0 left-0
              h-full w-1/2
              bg-gray-800
                flex items-center justify-center
              rounded-full
              transition-transform duration-300
              ${isPro ? "translate-x-full" : ""}
            `}
          ></div>

          {/* Labels */}
          <div className="relative z-10 flex w-full h-full items-center justify-center gap-[2.8rem]">
            <div>
              <span
                className={`text-[1rem] font-light ${!isPro ? "text-white" : "text-gray-800"} transition-colors`}
              >
                Frame Plan
              </span>
              {Array.isArray(pricingData.icon) && pricingData.icon[0] && (
                <span className="ml-2">
                  {React.createElement(pricingData.icon[0], {
                    className: `text-[1rem] inline-block w-5 h-5 ${!isPro ? "text-white" : "text-gray-800"}`,
                  })}
                </span>
              )}
            </div>

            <div>
              <span
                className={`text-[1rem] font-light ${isPro ? "text-white" : "text-gray-800"} transition-colors`}
              >
                Pro Plan
              </span>

              {Array.isArray(pricingData.icon) && pricingData.icon[1] && (
                <span className="ml-2">
                  {React.createElement(pricingData.icon[1], {
                    className: `inline-block w-5 h-5 text-[var(--color-orange-accent)]`,
                  })}
                </span>
              )}
            </div>
          </div>
        </div>
      </label>

      {/* Subtitle */}
      <p className="text-[3.5rem] text-center text-base/14 text-[#8A8A91] font-semibold">
        {" "}
        {pricingData.subtitle?.[0] ?? ""}{" "}
      </p>

      {/* Price */}
      <div className="flex">
        <div className="flex flex-col justify-center items-center font-semibold text-[#333336] ">
          <h2 className="text-[5rem]">{price}</h2>
          <div>
            <LuAsterisk className="inline-block text-[1.2rem] text-[var(--color-orange-accent)] mb-2" />
            <span className="text-[17px]">{pricingData.subtitle?.[1]}</span>
          </div>
        </div>
        <span className="text-[17px]">/{pricingData.period}</span>
      </div>
      <p className="text-[1.6rem] text-center text-[#8A8A91] text-base/8">
        {pricingData.subtitle?.[2]}
      </p>

      <div className="flex gap-6 mt-6">
        <HoverUnderlineLink text="pick a plan" />
        <HoverUnderlineLink text="book a call" />
      </div>
    </div>
  );
};

export default SwitchBtn;
