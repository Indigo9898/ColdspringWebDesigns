import DesignUpdatesImage from "../Components/DesignUpdatesImage";
import WebAccessiblityImage from "../Components/WebAccessiblityImage";
import SearchEngineUpdatesImage from "../Components/SearchEngineUpdatesImage";




const LifetimeWebsiteUpdatesSection = () => {
  return (
    <div className="container text-lg w-full">
      <div className="section-content mr-16">
        <p className="text-4xl font-bold mb-8">
          Lifetime Updates For Your Website
        </p>
        <p className="text-gray mb-16">
          Google changes its search alogrithm standards every so often, changing
          what is important to rank. And web accessibility guidelines for users
          with screen readers get updated as well. So we also include lifetime
          updates to your website to make sure it never goes out of date and is
          always changing with the times.
        </p>
        <a className=" cursor-pointer border-2 border-main-green w-fit h-fit p-5 pr-6 pl-6 text-xs font-bold rounded-md z-10 transition-all">
          Read More
        </a>
      </div>
      <div className="boxes-container justify-end w-full">
        <div className="box">
          <DesignUpdatesImage />
          <p className="font-bold mb-6 mt-6">Design Updates</p>
          <p className="text-gray">
            If you ever want a new design, we will rebuild your website at no
            extra cost.
          </p>
        </div>
        <div className="box">
          <WebAccessiblityImage />
          <p className="font-bold mb-6 mt-6">Web Accessibility</p>
          <p className="text-gray">
            Staying on top of the latest guidelines for web accessibility
            compliance.
          </p>
        </div>
        <div className="box">
          <SearchEngineUpdatesImage />
          <p className="font-bold mb-6 mt-6">Search Engine Updates</p>
          <p className="text-gray">
            Your website will stay up to date with Google&apos;s search guidelines
            for ranking.
          </p>
        </div>
        <div className="box">
          <DesignUpdatesImage />
          <p className="font-bold mb-6 mt-6">Google Business Profile</p>
          <p className="text-gray">
            We also help optimize and manage your Google, Bing, & Yahoo Business
            Profile
          </p>
        </div>
      </div>
    </div>
  );
};


export default LifetimeWebsiteUpdatesSection;