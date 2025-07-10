import { SectionContent } from "@/types/Types";

const Header: React.FC<SectionContent> = ({ title, title2 }) => {
  return (
    <div className="w-[32%]">
      <h2 className="text-[1.3125rem] text-[#C0C0C0]">{title}</h2>

      <h3 className="text-[3rem] font-semibold">{title2}</h3>
    </div>
  );
};

export default Header;
