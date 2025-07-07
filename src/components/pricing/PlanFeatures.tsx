import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface PlanFeaturesProps {
  content: {
    title?: string;
    subtitle?: string | string[];
  }[];
}

const PlanFeatures: React.FC<PlanFeaturesProps> = ({ content }) => {
  return (
    <div>
      <ul className="space-y-4">
        {content.map((item, index) => (
          <div key={index} className="max-w-[22rem]">
            <div className="flex items-start gap-4 mb-8">
              <div>
                <IoCheckmarkCircleOutline
                  className="text-[var(--color-orange-accent)] mt-1"
                  size={28}
                />
              </div>
              <li>
                <p className="font-semibold text-[1.1875rem]">{item.title}</p>
                <p className="text-[#8a8a91] text-[1.0625rem]">
                  {item.subtitle}
                </p>
              </li>
            </div>
            <hr className="border-t border-gray-200 my-2 w-full" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PlanFeatures;
