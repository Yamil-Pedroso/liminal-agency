import { aboutServicesData } from "@/data/aboutServicesData";

const AboutServices = () => {
  return (
    <div className="text-6xl flex items-center w-full min-h-screen bg-[#ffffff] z-10 relative">
      <div className="w-full flex justify-between px-10">
        <div className="flex flex-col">
          <h2 className="text-[3rem] font-semibold mb-8 text-[#C0C0C0] max-w-[40rem]">
            {aboutServicesData[0].title}
          </h2>
          <p className="text-[2.1875rem]  max-w-[36rem] text-black">
            {aboutServicesData[0].description}
          </p>
        </div>

        <div>
          <div className="w-[51.875rem] h-[25rem] relative">
            <img
              src="/images/services/img1.png"
              alt="About Services"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            {aboutServicesData
              .slice(1, aboutServicesData.length)
              .map((service, index) => (
                <div key={index} className="mt-8">
                  <h3 className="text-[1.75rem] font-bold mb-4 text-[#333336]">
                    {service.title}
                  </h3>
                  <p className="text-[1.3125rem] text-[#8A8A91] mb-8">
                    {service.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
