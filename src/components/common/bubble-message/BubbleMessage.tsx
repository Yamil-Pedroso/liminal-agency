import React from "react";
import { cn } from "@/lib/utils";

interface BubbleMessageProps {
  text: string;
  className?: string;
}

const BubbleMessage: React.FC<BubbleMessageProps> = ({ text, className }) => {
  return (
    <div
      className={cn(
        "relative inline-block px-8 py-5 bg-[var(--color-orange-accent)] text-white text-3xl font-semibold rounded-full shadow-lg",
        className
      )}
    >
      {text}

      <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[16px] border-l-transparent border-r-transparent border-t-[var(--color-orange-accent)]" />
    </div>
  );
};

export default BubbleMessage;
