import InterorPageHeading from "../Components/InteriorPageHeading";
import Image from "next/image";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

export default function page() {
  return (
    <main className="flex min-h-screen  flex-col bg-white items-center justify-between">
      <div className="min-h-90screen w-full   flex flex-col items-center">
        {/* Header */}
        <InterorPageHeading activePage="contact" pageName="Contact" />
        <div className="flex flex-col-reverse md:flex-row justify-center  h-full w-full p-8 md:pr-32 md:pl-32 2xl:pr-96 2xl:pl-96">
          <ContactForm />
          <div className="flex flex-col h-full w-full md:w-2/6 p-8 ">
            <Image
              src={"/presentation2.svg"}
              width={2000}
              height={2000}
              alt="logo"
              className="w-3/6 md:w-full"
            />
            <div className="mb-8 mt-8 border-l-4 border-main-green p-2">
              <p className="font-bold text-xl text-gray  mb-2">Email:</p>
              <p className="text-xl text-gray">Adyer1717@gmail.com</p>
            </div>
            <div className="border-l-4 border-main-green p-2">
              <p className="font-bold text-xl text-gray mb-2">Phone:</p>
              <p className="text-xl text-gray  mb-2">281-522-0728</p>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
