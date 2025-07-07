import { useState } from "react";
import SectionHeader from "@/components/common/section-header/SectionHeader";
import SectionHeader2 from "@/components/common/section-header/SectionHeader2";
import GridBlock from "@/components/common/grid-blocks/GridBlock";
import SwitchBtn from "@/components/common/switch/SwitchBtn";
import PlanFeatures from "./PlanFeatures";
import { proPlanOptions, framePlanOptions } from "@/data/pricingData";
import { LuAsterisk } from "react-icons/lu";

const Pricing = () => {
  const [isPro, setIsPro] = useState(false);

  return (
    <div className="flex flex-col  items-center w-full h-full py-[10rem] z-10">
      <SectionHeader
        title="Creative Subscriptions"
        subtitle="pricing"
        className="mb-8"
      />

      <SectionHeader2
        title="Design without constraints"
        subtitle="Access unlimited revisions and pro-level features with our all-inclusive monthly plan."
        className="flex items-center text-center max-w-[50rem]"
        titleStyle="text-base/19"
        subtitleStyle="mt-[1rem]"
      />

      <div className="flex flex-wrap justify-center gap-8">
        <GridBlock
          width="32rem"
          height="43.75rem"
          background="bg-[#e1e3e4]"
          className="p-6 "
        >
          <div className="flex flex-col  h-full">
            <div className="flex flex-col h-full">
              <p className="text-2xl text-[var(--color-orange-accent)]">
                Liminal
              </p>
              {isPro ? (
                <h2 className="text-3xl font-semibold  text-gray-800 mb-4">
                  Pro Plan
                </h2>
              ) : (
                <h2 className="text-3xl font-semibold  text-gray-800 mb-4">
                  Frame Plan
                </h2>
              )}
            </div>
            <p>
              <span>
                <LuAsterisk className="inline-block text-[1.2rem] text-[var(--color-orange-accent)] mb-2" />
              </span>
              Flexible plans—cancel anytime
            </p>
          </div>
        </GridBlock>

        <GridBlock
          width="32rem"
          height="43.75rem"
          background="bg-white"
          className="p-6"
        >
          <div className="flex justify-center w-full">
            <SwitchBtn isPro={isPro} setIsPro={setIsPro} />
          </div>
        </GridBlock>

        <GridBlock
          width="32rem"
          height="43.75rem"
          background="bg-white"
          className="p-6"
        >
          <PlanFeatures content={isPro ? proPlanOptions : framePlanOptions} />
        </GridBlock>
      </div>
    </div>
  );
};

export default Pricing;
