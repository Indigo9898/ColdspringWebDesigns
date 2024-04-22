import Image from "next/image";

const LogoGraphicsDesignSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-32 text-lg">
      <div></div>
      <div>
        <p className="font-bold text-4xl mb-8">
          Logos, Graphic Design, & Branding
        </p>
        <p className="mb-8 text-gray">
          We also offer logo and graphic design services via our own in-house
          graphic designer. If you have an existing logo that needs a touch up
          or need a completely new one we can help build your business's brand.
        </p>
        <div className="flex mb-8">
          <span className="mr-2">
            <Image
              className="max-w-none"
              src={"/Checkmark.svg"}
              height={32}
              width={32}
              alt="logo"
            />
          </span>
          <div>
            <p className="text-lg font-bold text-nowrap mb-2 ">
              {" "}
              Logos Starting at $350
            </p>
            <p className="text-lg text-gray">
              Rates may increase based on complexity, number of hours, and
              number of revisions
            </p>
          </div>
        </div>
        <div className="flex mb-8">
          <span className="mr-2">
            <Image
              className="max-w-none"
              src={"/Checkmark.svg"}
              height={32}
              width={32}
              alt="logo"
            />
          </span>
          <div>
            <p className="text-lg font-bold text-nowrap mb-2 ">
              {" "}
              Social Media Graphics
            </p>
            <p className="text-lg text-gray">
              Make a post that stands out with its own custom graphics. Give us
              a call for plans and rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGraphicsDesignSection;
