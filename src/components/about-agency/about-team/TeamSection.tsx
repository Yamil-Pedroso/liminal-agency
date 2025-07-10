import React from "react";
import TeamCard from "./TeamCard";
import { agTeam } from "@/data/teamData";

type TeamSectionProps = {
  title: string;
  members: typeof agTeam;
  offset?: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
};

const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  members,
  offset = 0,
  hoveredIndex,
  setHoveredIndex,
}) => (
  <div className="flex justify-center p-10">
    <h2 className="w-[40%] text-[1.3125rem] text-[#8A8A91]">{title}</h2>
    <div className="flex w-[70%] gap-10">
      {members.map((m, idx) => {
        const realIdx = idx + offset;
        return (
          <TeamCard
            key={realIdx}
            member={m}
            index={realIdx}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        );
      })}
    </div>
  </div>
);

export default TeamSection;
