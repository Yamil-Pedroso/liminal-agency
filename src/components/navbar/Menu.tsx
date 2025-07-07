import { navbarItems } from "@/data/navbarData";
import LocationInfo from "../common/location-info/LocationInfo";

const Menu = () => {
  return (
    <nav className="flex justify-between mt-30 px-10">
      <div className="flex flex-col max-w-[1000px]">
        <LocationInfo
          className="mb-4 text-8xl text-white"
          highlightClass="text-[#ff4401]"
          clockClass="flex flex-col mt-14 text-7xl text-white"
          greetingClass="font-extralight text-4xl"
        />
      </div>
      <ul className="flex flex-col text-right">
        {navbarItems.map((item, index) => (
          <li key={index} className="mb-4">
            <a
              href={item.href}
              className="text-white hover:text-[#ff4401] transition-colors text-8xl"
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
