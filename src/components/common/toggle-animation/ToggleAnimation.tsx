import ToggleIcon from "@/components/common/toggle-icon/ToggleIcon";
import { AnimatePresence, motion } from "framer-motion";

interface ToggleAnimationProps {
  question?: string;
  answer?: string;
  onToggle?: () => void;
  isOpen: boolean;
}

const ToggleAnimation: React.FC<ToggleAnimationProps> = ({
  question,
  answer,
  onToggle,
  isOpen = false, // Default value for isOpen
}) => {
  return (
    <div className="flex justify-between items-center w-full p-4 mb-4 relative">
      <div className="overflow-hidden">
        <div className="flex items-center w-full gap-4 ">
          <h3 className="text-[1.75rem] text-[#333336] font-semibold whitespace-nowrap ">
            {question}
          </h3>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.p
              key="answer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[#8A8A91] text-[1.75rem] text-base/8 max-w-[50rem]"
            >
              {answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <ToggleIcon className="mt-2" isOpen={isOpen} toggleMenu={onToggle} />
    </div>
  );
};

export default ToggleAnimation;
