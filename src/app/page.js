import Header from "./Components/Header";
import WhatWeDoSection from "./Components/WhatWeDoSection";
import ContractPlansSection from "./Components/ContractPlansSection";
import LiveDemosSection from "./Components/LiveDemosSection";
import WhoWeAreSection from "./Components/WhoWeAreSection";
import OurPlansSection from "./Components/OurPlansSection";
import Footer from "./Components/Footer";

export default function Page() {
  return (
    <main className="flex min-h-screen  flex-col bg-white items-center justify-between">
      <Header />
      <WhatWeDoSection />
      <ContractPlansSection />
      <LiveDemosSection />
      <WhoWeAreSection />
      <OurPlansSection />
      <Footer/>
    </main>
  );
}
