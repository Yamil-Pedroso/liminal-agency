import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import BubbleMessage from "@/components/common/bubble-message/BubbleMessage";
import { TeamProps } from "@/types/Types";

type TeamCardProps = {
  member: TeamProps;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
};

const TeamCard: React.FC<TeamCardProps> = ({
  member,
  index,
  hoveredIndex,
  setHoveredIndex,
}) => {
  return (
    <div
      className="flex flex-col relative group"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.div
            key={`bubble-${index}`}
            initial={{ opacity: 0, y: 20, scale: 0.75 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.75 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.4,
            }}
            className="absolute left-[-2rem] top-[-2rem] z-10"
          >
            <BubbleMessage text={member.grettings.toUpperCase()} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-[21.9375rem] h-[33.625rem] overflow-hidden">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover transition-transform delay-75 duration-200 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-1 py-4">
        <p className="text-[1.3125rem] text-[#333336]">{member.name}</p>
        <p className="text-[1.0625rem] text-[#8A8A91]">{member.position}</p>
        <hr className="mt-2.5 text-[#e0e0e0]" />
        <div className="flex gap-3.5 text-[var(--color-orange-accent)] text-2xl mt-3.5">
          {Array.isArray(member.icon) ? (
            <div className="flex gap-8">
              {member.icon.map((Icon, idx) => (
                <div key={idx} className="text-3xl">
                  {React.createElement(Icon)}
                </div>
              ))}
            </div>
          ) : (
            member.icon && (
              <div className="text-3xl">{React.createElement(member.icon)}</div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
