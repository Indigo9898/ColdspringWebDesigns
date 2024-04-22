"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //code that checks the activeProp property to determine active page and apply style change
  const homeCheck = props.activePage === "home" ? true : false;
  const activeHome = homeCheck ? "activePage" : "";
  const activeHomeMobile = homeCheck ? "activePageMobile" : "";

  const aboutCheck = props.activePage === "about" ? true : false;
  const activeAbout = aboutCheck ? "activePage" : "";
  const activeAboutMobile = aboutCheck ? "activePageMobile" : "";

  const servicesCheck = props.activePage === "services" ? true : false;
  const activeServices = servicesCheck ? "activePage" : "";
  const activeServicesMobile = servicesCheck ? "activePageMobile" : "";

  const demoCheck = props.activePage === "demo" ? true : false;
  const activeDemo = demoCheck ? "activePage" : "";
  const activeDemoMobile = demoCheck ? "activePageMobile" : "";

  const contactCheck = props.activePage === "contact" ? true : false;
  const activeContact = contactCheck ? "activePage" : "";
  const activeContactMobile = contactCheck ? "activePageMobile" : "";

  return (
    <nav
      className={`navbar h-fit w-full flex items-center mb-12 md:mb-10 justify-between md:justify-center`}
    >
      <div className="logo md-logo xxl-logo transition-all mr-16 xl:mr-24">
        <Image src={"/Logo.svg"} layout="fill" alt="logo" />
      </div>
      <div className="navItems">
        <div className="h-full w-full flex justify-between gap-6 text-sm items-center text-white font-bold">
          <a href="./" className={`justify-self-center nav-link ${activeHome} `}>
            Home
          </a>
          <a
            href="/about"
            className={`justify-self-center nav-link ${activeAbout}  z-50`}
          >
            About
          </a>
          <a
            href="/services"
            className={`justify-self-center nav-link ${activeServices}  z-50`}
          >
            Services
          </a>
          <a
            href="/demo"
            className={`justify-self-center text-nowrap nav-link ${activeDemo}  z-50`}
          >
            Live Demos
          </a>
          <a
            href="/contact"
            className={`justify-self-center nav-link ${activeContact}  z-50`}
          >
            Contact
          </a>
        </div>
      </div>
      <button
        onClick={toggleMenu}
        className={`hamburger-menu md:hidden z-30 ${showMenu ? "open" : ""}`}
      >
        <span className="line rounded-md"></span>
        <span className="line rounded-md"></span>
        <span className="line rounded-md"></span>
      </button>
      {showMenu && (
        <div
          className={`absolute z-50 p-6 top-0 right-0 h-screen bg-white w-1/2 flex flex-col items-end text-gray transition-all ${
            showMenu ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          {/* Navigation links */}
          <a href="./" className={`mt-36 mobile-nav-link ${activeHomeMobile}`}>
            Home
          </a>
          <a
            href="./about"
            className={`mt-6  z-50 mobile-nav-link ${activeAboutMobile}`}
          >
            About
          </a>
          <a
            href="/services"
            className={`mt-6  z-50 mobile-nav-link ${activeServicesMobile}`}
          >
            Services
          </a>
          <a
            href="./demo"
            className={`mt-6  z-50 mobile-nav-link ${activeDemoMobile}`}
          >
            Live Demos
          </a>
          <a
            href="./contact"
            className={`mt-6  z-50 mobile-nav-link ${activeContactMobile}`}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
