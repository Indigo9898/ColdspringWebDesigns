import MobileHand from "./MobileHand";
import ResponsiveImage from "./ResponsiveImage";
import OptimizationImage from "./OptimizationImage";

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col lg:-mt-12 items-center p-8 md:pr-32 md:pl-32  2xl:pr-96 2xl:pl-96 z-10">
      <div className="flex">
        <p className="text-main-green text-5xl font-bold  ">WHAT&nbsp;</p>
        <p className="mb-6 text-5xl font-extrabold ">WE DO</p>
      </div>

      <p className="w-5/6 lg:w-4/6 text-lg text-gray text-center mb-32">
        At our freelance web design studio, we excel in creating customized
        websites for small businesses nationwide. With a personal touch in every
        line of code, we ensure top-notch performance that not only attracts
        more visitors to your site but also elevates your business revenue.{" "}
        <a className="text-main-green uppercase text-nowrap cursor-pointer">
          Discover More
        </a>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col text-center items-center">
          <MobileHand />
          <p className="font-bold text-lg mb-4">Mobile-First Design</p>
          <p className="text-gray w-4/6">
            We prioritize mobile optimization, crafting your site for seamless
            performance across all devices, then extend it to tablets and
            desktops.
          </p>
        </div>
        <div className="flex flex-col text-center items-center">
          <ResponsiveImage />
          <p className="font-bold text-lg mb-4">Fully Responsive</p>
          <p className="text-gray w-4/6">
            Crafted to adapt flawlessly to all screens, our website ensures a
            seamless experience for clients on mobile, tablet, and desktop.
          </p>
        </div>
        <div className="flex flex-col text-center items-center">
          <OptimizationImage />
          <p className="font-bold text-lg mb-4">Optimization</p>
          <p className="text-gray w-4/6">
            60% of all internet traffic is on mobile devices, so we optimize
            your mobile to perform their best in search engines.
          </p>
        </div>
      </div>
    </div>
  );
};


export default WhatWeDoSection;