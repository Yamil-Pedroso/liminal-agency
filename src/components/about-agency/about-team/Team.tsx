import React, { useState } from "react";
import { agTeam, TeamHeadings } from "@/data/teamData";
import HoverUnderlineLink from "@/components/common/hovers/HoverUnderlineLink";
import Header from "@/components/common/header/Header";
import TeamSection from "./TeamSection";

const TeamAG = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full h-full bg-[#f6f6f6] z-10 relative">
      <div className="flex justify-center p-10">
        <Header title={TeamHeadings.title} title2={TeamHeadings.title2} />
        <div className="w-[70%] gap-10">
          <h2 className="text-[1.3125rem]">{TeamHeadings.subtitle?.[0]}</h2>
          <h3 className="text-[35px] text-[#8A8A91] mt-3.5 text-base/11">
            {TeamHeadings.subtitle?.[1]}
          </h3>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <TeamSection
          title="Creative Direction"
          members={agTeam.slice(0, 3)}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          offset={0}
        />
        <TeamSection
          title="Design Crafters"
          members={agTeam.slice(3, 6)}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          offset={3}
        />
        <TeamSection
          title="Creative Direction"
          members={agTeam.slice(6, 9)}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          offset={6}
        />
      </div>

      <div className="flex mx-auto items-center text-black text-center mt-20 gap-9 p-6">
        <p className="font-display text-5xl ">Join Us</p>
        <div className="w-px h-12 bg-[#6f6f6f]"></div>

        <div className="text-3xl flex">
          <div className="text-3xl flex gap-4">
            <HoverUnderlineLink text="opportunities Hub" />
            <HoverUnderlineLink text="let’s Connect" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAG;
