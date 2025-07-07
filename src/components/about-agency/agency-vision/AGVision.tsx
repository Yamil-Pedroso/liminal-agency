import { motion } from "framer-motion";

const visionParagraphs = [
  "Our aim is to keep redefining limits and raising the bar in digital design and technology.",
  "We don’t just craft visuals — we build immersive experiences that fuel growth and foster deeper user connection.",
];

const AGVision = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen sticky top-0 bg-[var(--color-orange-accent)] px-10 z-10">
      <div className="flex flex-col text-[3.1rem] text-white font-bold max-w-[76rem] gap-12 leading-tight">
        {visionParagraphs.map((paragraph, paragraphIndex) => (
          <motion.p
            key={paragraphIndex}
            className="flex flex-wrap gap-x-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            {paragraph.split(" ").map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: wordIndex * 0.05 + paragraphIndex * 0.4,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
        ))}
      </div>

      <div className="flex flex-col mt-10 text-white">
        <span className="text-2xl font-display">NextGen</span>
        <span className="text-3xl">Liminal Team</span>
      </div>
    </div>
  );
};

export default AGVision;
