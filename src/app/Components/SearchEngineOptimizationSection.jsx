import Image from "next/image";


const SearchEngineOptimizationSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-32 text-lg">
      <div>
        <p className="font-bold text-4xl mb-8">
          Search Engine Optimization For 2021
        </p>
        <p className="mb-8 text-gray">
          If someone tells you they can get you to the front page of Google in 3
          months - RUN! Unless your website was featured by The New York Times
          it could take years to rank in the top of the search results.
        </p>
        <p className="text-gray mb-8">
          We offer a number of the latest search engine optimization techniques
          for 2021:
        </p>
        <ul>
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
            Keyword-Centered Content & Blogs
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
            Mobile-First-Optimized for the Best Experience
          </li>
          <li className=" mb-6 flex text-gray ">
            <span className="mr-2">
              <Image
                className="max-w-none"
                src={"/Checkmark.svg"}
                height={24}
                width={24}
                alt="logo"
              />
            </span>
            Clean & Organized Code Structure For Web Crawlers
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
            Fully Responsive For Mobile, Tablet, & Desktop
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center ml-16">
        <Image src={"/presentation.svg"} width={2000} height={2000} alt="logo" />
      </div>
    </div>
  );
};

export default SearchEngineOptimizationSection;
