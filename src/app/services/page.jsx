import InterorPageHeading from "../Components/InteriorPageHeading";
import WebDesignDoneDiffrentSection from "../Components/WebDesignDoneDiffrentSection";
import SearchEngineOptimizationSection from "../Components/SearchEngineOptimizationSection";
import LogoGraphicsDesignSection from "../Components/LogosGraphicsDesignSection";
import LifetimeWebsiteUpdatesSection from "../Components/LifetimeWebsiteUpdatesSection";
import OurPlansExtendedSection from "../Components/OurPlansExtendedSection";
import Footer from "../Components/Footer";


export default function page() {
  return (
    <main className="flex min-h-screen  flex-col bg-white items-center justify-between overflow-x-hidden">
      <div className="min-h-90screen w-full   flex flex-col items-center">
        {/* Header */}
        <InterorPageHeading activePage="services" pageName="Services" />
        <div className="min-h-screen flex flex-col items-center bg-white">
          {/* Your main content */}
          <div className=" relative h-full w-full p-8 md:pr-32 md:pl-32 2xl:pr-96 2xl:pl-96">
            {/* Insert your main content components here */}
            <WebDesignDoneDiffrentSection />
            <SearchEngineOptimizationSection /> 
            <LifetimeWebsiteUpdatesSection className="mb-32" />
            <OurPlansExtendedSection />
          </div>
          {/* Absolute div at the bottom */}
        </div>
      </div>
      <Footer/>
    </main>
  );
}
