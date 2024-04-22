import Image from "next/image";

const Footer = () => {
    return(
        <div className="w-full h-fit mt-16 bg-main-green">
        <div className="flex flex-col md:flex-row p-16 md:p-8 md:pr-32 md:pl-32 2xl:pr-96 2xl:pl-96 justify-center">
          <div className="mb-4 mr-16">
            <div className=" footer-logo transition-all   mb-2">
              <Image src={"/Logo.svg"} layout="fill" alt="logo" />
            </div>
            <div className="flex flex-col">
              <a className="text-white mb-2 cursor-pointer">
                Adyer1717@gmail.com
              </a>
              <a className="text-white cursor-pointer">(281)-522-0728</a>
            </div>
          </div>
          <div className="mb-4 mt-8 flex flex-col mr-16">
            <p className="text-white font-bold text-2xl underline underline-offset-8">
              Navigation
            </p>
            <a className={`mt-10 cursor-pointer text-white`}>Home</a>
            <a className={`mt-6 cursor-pointer text-white`}>About</a>
            <a className={`mt-6 cursor-pointer text-white`}>Services</a>
            <a className={`mt-6  cursor-pointer text-white`}>Live Demos</a>
            <a className={`mt-6 cursor-pointer text-white`}>Contact</a>
          </div>
          <div className="mb-4 mt-8 flex flex-col">
            <p className="text-white font-bold text-2xl underline underline-offset-8">
              Services
            </p>
            <a className={`mt-10  text-white`}>Web Design</a>
            <a className={`mt-6  text-white`}>Website Maintenance</a>
            <a className={`mt-6  text-white`}>SEO Services</a>
            <a className={`mt-6   text-white`}>Content Creation</a>
          </div>
        </div>
      </div>
    )
}

export default Footer;