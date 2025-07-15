import React from "react";

const AboutHero = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen top-0 left-0 ">
      <div className="flex flex-col fixed inset-0 items-center justify-center z-10">
        <h1 className="text-[8.125rem] font-bold text-white">
          About Our Agency
        </h1>

        <p className=" text-[1.75rem] text-white max-w-[32rem]">
          We ship design that not only capture the present but also prepare for
          the future.
        </p>
      </div>
      <div className="w-full h-screen fixed inset-0 bg-gradient-to-r from-[#f6f6f6] to-[#ffffff] ">
        <img
          src="/images/about/img1.png"
          alt="About Agency"
          className="w-full h-full object-cover brightness-90"
        />
      </div>
    </div>
  );
};

export default AboutHero;
