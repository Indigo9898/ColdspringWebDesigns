import Image from "next/image";
import DefaultButton from "./DefaultButton";

const OurPlansSection = () => {
  return (
    <div className="flex flex-col items-center mt-28 p-8 md:pr-32 md:pl-32  2xl:pr-96 2xl:pl-96 z-10">
      <div className="flex">
        <p className="text-main-green text-5xl font-bold  ">Our&nbsp;</p>
        <p className="mb-8 text-5xl font-extrabold ">Plans</p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className=" relative h-full w-full border-2 rounded-lg border-main-green border-opacity-10 p-40 pt-96 group">
          <div className="absolute h-16 w-full left-0 top-0 bg-opacity-20 bg-light-green group-hover:bg-opacity-100">
            <div className="h-16 w-full bg-light-green bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-100">
              <p className="text-center text-lg  font-bold">Standard</p>
            </div>
          </div>
          <div className="absolute left-0 w-full top-0 mt-24">
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-center text-lg text-gray mb-8">STARTING AT</p>
              <p className="text-center mb-10 text-main-green text-5xl font-semibold">
                $150/MO
              </p>
              <ul className="ml-8">
                <li className="mb-8 flex text-gray ">
                  <span className="mr-2">
                    <Image
                      className="max-w-none"
                      src={"/Checkmark.svg"}
                      height={24}
                      width={24}
                      alt="logo"
                    />
                  </span>
                  Unlimited Edits
                </li>
                <li className=" mb-6 flex text-gray">
                  <span className="mr-2">
                    <Image
                      className="max-w-none"
                      src={"/Checkmark.svg"}
                      height={24}
                      width={24}
                      alt="logo"
                    />
                  </span>
                  Includes Hosting
                </li>
                <p className=" mb-6 flex text-gray ">
                  <span className="mr-2">
                    <Image
                      className="max-w-none"
                      src={"/Checkmark.svg"}
                      height={24}
                      width={24}
                      alt="logo"
                    />
                  </span>
                  24/7 Customer Service
                </p>
                <p className=" mb-6 flex text-gray">
                  <span className="mr-2">
                    <Image
                      className="max-w-none"
                      src={"/Checkmark.svg"}
                      height={24}
                      width={24}
                      alt="logo"
                    />
                  </span>
                  Lifetime Updates
                </p>
              </ul>
              <DefaultButton text="GET IN TOUCH!" />
            </div>
          </div>
        </div>

        <div className=" relative h-full w-full border-2 rounded-lg border-main-green border-opacity-10 p-40 pt-96 group">
          <div className="absolute h-16 w-full left-0 top-0 bg-opacity-20 bg-light-green group-hover:bg-opacity-100">
            <div className="h-16 w-full bg-light-green bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-100">
              <p className="text-center text-lg  font-bold">E-Commerce</p>
            </div>
          </div>
          <div className="absolute left-0 w-full top-0 mt-24">
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-center text-lg text-gray mb-8">STARTING AT</p>
              <p className="text-center mb-8  text-main-green text-5xl font-semibold">
                $8K
              </p>
              <ul className="ml-8">
                <li className="mb-8 flex text-gray ">
                  <span className="mr-2">
                    <Image
                      className="max-w-none"
                      src={"/Checkmark.svg"}
                      height={24}
                      width={24}
                      alt="logo"
                    />
                  </span>
                  $8000 min. Up Front Cost
                </li>
                <li className=" mb-6 flex text-gray">
                  <span className="mr-2">
                    <Image
                      className="max-w-none"
                      src={"/Checkmark.svg"}
                      height={24}
                      width={24}
                      alt="logo"
                    />
                  </span>
                  Custom Designed
                </li>
                <p className=" mb-6 flex text-gray ">
                  <span className="mr-2">
                    <Image
                      className="max-w-none"
                      src={"/Checkmark.svg"}
                      height={24}
                      width={24}
                      alt="logo"
                    />
                  </span>
                  Custom Coded Shopify Integration
                </p>
                <p className=" mb-6 flex text-gray">
                  <span className="mr-2">
                    <Image
                      className="max-w-none"
                      src={"/Checkmark.svg"}
                      height={24}
                      width={24}
                      alt="logo"
                    />
                  </span>
                  Easy to edit
                </p>
              </ul>
              <DefaultButton text="GET IN TOUCH!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPlansSection;
