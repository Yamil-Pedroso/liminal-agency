import InovationBrands from "./InnovationBrands";
import LocationInfo from "../common/location-info/LocationInfo";
import FooterLinksSection from "./FooterLinksSection";
import { TiArrowRightThick } from "react-icons/ti";

const socialNetworks = [
  { name: "Facebook", link: "https://www.facebook.com" },
  { name: "Twitter", link: "https://www.twitter.com" },
  { name: "Instagram", link: "https://www.instagram.com" },
  { name: "LinkedIn", link: "https://www.linkedin.com" },
  { name: "Github", link: "https://www.github.com" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 w-full z-10">
      <InovationBrands />

      {/* Footer Section */}
      <div className="flex justify-center flex-col w-full h-screen sticky top-0 overflow-hidden bg-white text-black">
        <div className="flex w-full ">
          <div className="flex flex-col text-right mt-[-4rem] px-10">
            <p className="text-[19rem] text-[var(--color-orange-accent)] font-bold">
              Liminal
            </p>
            <p className="text-7xl mt-[-5rem] font-display font-semibold text-[#626265]">
              The Creative Agency
            </p>
          </div>

          <LocationInfo
            classContainer="py-12 px-30 text-right"
            className="mb-4 text-[35px] text-[#333336]"
            highlightClass="text-black"
            clockClass="flex flex-col text-[4rem] text-[#333336] font-semibold"
            greetingClass="font-extralight text-4xl"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="grid grid-cols-4 grid-rows-[23rem_10rem] border-t border-gray-300">
            <div className=" col-span-2 flex flex-col justify-center border-r border-gray-300">
              <div className="flex mx-[3rem] gap-20">
                <div className="flex flex-col gap-4">
                  <FooterLinksSection />
                </div>
              </div>
            </div>

            <div className="flex flex-col border-r border-gray-300 bg-[#f6f6f6]">
              <div className="flex flex-col p-8">
                <h2 className="text-[3rem] mb-2 ">Stay in the Loop</h2>
                <p className="text-[1.5rem] mb-4">
                  Stay informed about our latest news, updates by subscribing to
                  our newslette
                </p>
                <p>We respect your inbox. No spam, just valuable updates.</p>

                <input
                  type="email"
                  placeholder="Your email"
                  className="mt-4 p-2 border border-gray-300 rounded w-full"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <ul className="flex flex-col">
                {socialNetworks.map((network) => (
                  <div key={network.name} className="">
                    <div className="flex items-center justify-between mr-10">
                      <li key={network.name} className="mb-2 p-[.9rem] ">
                        <a
                          href={network.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-gray-700 hover:text-[var(--color-orange-accent)]"
                        >
                          {network.name}
                        </a>
                      </li>

                      <TiArrowRightThick className="text-[var(--color-orange-accent)] text-2xl" />
                    </div>
                    <hr className="border-t-gray-300" />
                  </div>
                ))}
              </ul>
            </div>

            {/* Segunda fila (última) – sin grid interna */}
            {/* Ya estás en grid-cols-4 desde el contenedor padre */}
            <div className="col-span-2 flex items-center justify-between border-t border-r border-gray-300 px-12">
              <div className="flex flex-col max-w-[15rem] mb-4">
                <p className="text-xs mb-2">Offline</p>
                <p className="text-lg font-semibold mb-2">
                  <span className="text-[var(--color-orange-accent)]">
                    Liminal AG
                  </span>{" "}
                  Steinstrasse 23 8008 Zürich
                </p>
                <p className="text-xl mb-2">(+41) 44 123 45 67</p>
              </div>

              <div className="max-w-[25rem]">
                <p className="text-[17px] text-[#8A8A91]">
                  Liminal is a creative agency based in Zürich, Switzerland. We
                  specialize in innovative design, branding, and digital
                  solutions that help businesses thrive in the digital age.
                </p>
              </div>
            </div>

            {/* Columna 3 */}
            <div className="flex flex-col items-center justify-center border-r border-gray-300">
              <h3 className="text-2xl font-bold mb-2">last</h3>
            </div>

            {/* Columna 4 */}
            <div className="flex flex-col items-center justify-center px-6 py-10">
              <h3 className="text-2xl font-bold mb-2">create</h3>
              <p className="text-lg text-gray-700">
                © 2025 Liminal AG. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
