import { achievementsData } from "@/data/achievementsData";
import { useInView } from "@/hooks/useInView";
import FunFactItem from "./FunFactItem";

const FunFact = () => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
      >
        {achievementsData.map((item) => (
          <FunFactItem
            key={item.title}
            title={item.title}
            quantity={item.quantity ?? 0}
            start={isInView}
            classNameTitle="text-xl text-white"
            classNameQuantity="text-4xl text-white font-bold"
          />
        ))}
      </div>
    </section>
  );
};

export default FunFact;
