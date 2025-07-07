import HoverUnderlineLink from "../common/hovers/HoverUnderlineLink";
import { footerData } from "@/data/footerData";

const groups = [
  footerData.menuItems?.slice(0, 6),
  footerData.menuItems?.slice(6, 11),
];

const FooterLinksSection = () => {
  return (
    <div className="flex gap-20">
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="flex flex-col gap-4 items-start">
          {group?.map((item) => (
            <HoverUnderlineLink
              key={item.link}
              text={item.text}
              classNameText="text-[22px] font-light"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinksSection;
