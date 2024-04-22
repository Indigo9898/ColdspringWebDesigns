import Image from "next/image";

const ContractPlansSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 mt-16  2xl:mt-28 p-8 md:pr-32 md:pl-32  2xl:pr-96 2xl:pl-96 z-10">
      <div className="flex justify-center items-center mr-16">
        <Image src={"/saving.svg"} width={2000} height={2000} alt="logo" />
      </div>
      <div className="">
        <p className="text-5xl font-bold mb-8">
          <span className="text-main-green">$0</span> Down,{" "}
          <span className="text-main-green">$150</span> Per Month, 12 Month
          Minimum Contract
        </p>
        <p className="text-gray text-lg mb-8">
          $0 down for a standard 5 page small business website. If you need more
          than that then we have to do custom pricing based on the scope of
          work, number of additional pages, and time involved.
        </p>
        <p className="text-gray mb-8 text-lg">
          You own your domain, content, listing, and profiles. Cancel anytime
          with no fees or hassle.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
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
                  Hosting Fees Included
                </p>
                <p className="text-lg text-gray">
                  Hosting fees are built right into the monthly payment.
                </p>
              </div>
            </div>
          </div>
          <div>
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
                <p className="text-lg font-bold text-nowrap mb-2  ">
                  {" "}
                  Hosting Fees Included
                </p>
                <p className="text-lg text-gray">
                  Hosting fees are built right into the monthly payment.
                </p>
              </div>
            </div>
          </div>
          <div>
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
                  Hosting Fees Included
                </p>
                <p className="text-lg text-gray">
                  Hosting fees are built right into the monthly payment.
                </p>
              </div>
            </div>
          </div>
          <div>
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
                  Hosting Fees Included
                </p>
                <p className="text-lg text-gray">
                  Hosting fees are built right into the monthly payment.
                </p>
              </div>
            </div>
          </div>
          <div>
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
                  Hosting Fees Included
                </p>
                <p className="text-lg text-gray">
                  Hosting fees are built right into the monthly payment.
                </p>
              </div>
            </div>
          </div>
          <div>
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
                  Hosting Fees Included
                </p>
                <p className="text-lg text-gray">
                  Hosting fees are built right into the monthly payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractPlansSection;
