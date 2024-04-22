import Image from "next/image";

const WebDesignDoneDiffrentSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 mb-32 text-lg">
      <div className="flex justify-center items-center mr-16">
        <Image src={"/manstanding.svg"} width={2000} height={2000} alt="logo" />
      </div>
      <div>
        <p className="font-bold text-4xl mb-8">
          Web Design & Development Done Differently
        </p>
        <p className="mb-8 text-gray">
          What makes us unique in the development world is that we don't use
          WordPress, frameworks, or page builders. We meticulously write the
          code line by line. This gives us much more control over the design,
          and the website performs lightning fast because there's no bloated or
          messy code that slows it down.
        </p>
        <p className="text-gray">
          Websites built by hand will out-perform most WordPress sites and drag
          and drop page builders which could cost thousands of dollars. When it
          comes to the web, the faster and more organized websites win.
        </p>
      </div>
    </div>
  );
};


export default WebDesignDoneDiffrentSection;