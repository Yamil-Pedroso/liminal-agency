import { motion } from "framer-motion";
import { GiHand } from "react-icons/gi";

interface ModalNoteProps {
  onClose: () => void;
}

const ModalNote = ({ onClose }: ModalNoteProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3, duration: 0.5 }}
    className="fixed inset-0 z-[1000]"
  >
    {/* Detecta clics fuera del modal */}
    <motion.div
      onClick={onClose}
      className="flex h-full w-full items-center justify-center bg-black/70"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 1 }}
        transition={{
          delay: 3,
          type: "spring",
          stiffness: 300,
          damping: 15,
          mass: 0.8,
        }}
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-[16.25rem] rounded-lg bg-[#272727] p-3 text-center
          sm:max-w-[18.75rem] sm:p-3.5
          md:max-w-[21.875rem] md:p-4
          lg:max-w-[25rem] lg:p-[1.8rem]
        "
      >
        <h2
          className="
            mt-0 flex items-center justify-center
            text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem]
          "
        >
          Hola!
          <GiHand className="ml-2 align-middle text-[1.5rem]" />
        </h2>

        <p
          className="
            my-2.5
            text-[0.8125rem] sm:text-[0.875rem] md:text-[0.9375rem] lg:text-base
          "
        >
          This website is currently under refactoring. New projects and designs
          will be added soon, so stay tuned for updates!
        </p>

        <button
          onClick={onClose}
          className="
            mt-5 rounded bg-[#E76F51] px-[0.75rem] py-[0.4375rem] text-[0.8125rem] text-white
            transition-colors duration-300 hover:bg-[#b6573f]
            sm:px-[0.875rem] sm:py-2 sm:text-sm
            md:px-4 md:py-2 md:text-[0.9375rem]
            lg:px-5 lg:py-2.5 lg:text-base
          "
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default ModalNote;
