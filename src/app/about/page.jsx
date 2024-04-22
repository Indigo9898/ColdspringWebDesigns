import InterorPageHeading from "../Components/InteriorPageHeading";
import AboutMeSection from "../Components/AboutMeSection";
import QualityOverQuanitySection from "../Components/QualityOverQuanitySection";
import CirclesSection from "../Components/CirclesSection";
import DefaultButton from "../Components/DefaultButton";
import Footer from "../Components/Footer";



export default function Page() {
  return (
    <main className="flex min-h-screen  flex-col bg-white items-center justify-between">
      <div className="min-h-screen w-full   flex flex-col items-center">
        {/* Header */}
        <InterorPageHeading activePage="about" pageName="About Us" />
        <div className="min-h-screen mt-16 flex flex-col items-center p-8 md:pr-32 md:pl-32  2xl:pr-96 2xl:pl-96">
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
