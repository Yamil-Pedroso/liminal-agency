import { navbarItems } from "@/data/navbarData";
import LocationInfo from "../common/location-info/LocationInfo";

const Menu = () => {
  return (
    <nav className="flex justify-between flex-col-reverse mt-30 px-10 lg:flex-row">
      <div className="flex flex-col max-w-[1000px]">
        <LocationInfo
          className="max-w-[12rem] text-[19px] text-right text-white mt-6 ml-auto lg:max-w-full lg:mb-4 lg:text-left lg:text-8xl"
          highlightClass="text-[#ff4401]"
          clockClass="flex flex-col  text-5xl text-white text-right mt-6 lg:text-7xl lg:mt-14 lg:text-left lg:ml-0"
          greetingClass="font-extralight text-[1.5rem] lg:text-4xl"
        />
      </div>
      <ul className="flex flex-col text-right">
        {navbarItems.map((item, index) => (
          <li key={index} className="mb-2 last:mb-0">
            <a
              href={item.href}
              className="text-white hover:text-[#ff4401] transition-colors text-[48px] text-base/12 lg:text-8xl"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
