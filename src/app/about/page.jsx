import InterorPageHeading from "../Components/InteriorPageHeading";
import AboutMeSection from "../Components/AboutMeSection";
import QualityOverQuanitySection from "../Components/QualityOverQuanitySection";
import CirclesSection from "../Components/CirclesSection";
import DefaultButton from "../Components/DefaultButton";
import Footer from "../Components/Footer";



export default function Page() {
  return (
    <main className="flex min-h-screen  flex-col bg-white items-center justify-between overflow-x-hidden">
      <div className="min-h-90screen w-full   flex flex-col items-center">
        {/* Header */}
        <InterorPageHeading activePage="services" pageName="Services" />
        <div className="min-h-screen flex flex-col items-center text-center bg-white">
          {/* Your main content */}
          <AboutMeSection />
          <QualityOverQuanitySection />
          <CirclesSection />
          <DefaultButton text="Our Services"/>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
