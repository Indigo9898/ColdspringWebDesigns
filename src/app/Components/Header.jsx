"use client"

import { useEffect ,useState } from "react";

import Image from "next/image";

import Navbar from "./Navbar";



// Header Code
const Header = () => {
  
  return (
    <div className="min-h-95screen relative w-full gradiant-green-background  p-8 md:pr-32 md:pl-32  2xl:pr-96 2xl:pl-96 flex flex-col items-center">
      {/* Header */}
      <header className="flex flex-col h-5/6">
        {/* Nav Menu */}
        <Navbar activePage="home" />

        {/* Header Content */}
        <div className="flex flex-col md:w-5/6 2xl:w-4/6  z-20">
          <div className="mb-6">
            <h1 className="text-white font-bold text-5xl leading-normal">
              Small Business Web <br /> Design & <br /> Development
            </h1>
          </div>

          <div className="mb-6">
            <p className="text-wrap text-white">
              Exclusively hand-coded, no page builders or WordPress - Unlock
              superior results with our tailored websites, starting at
              $150/month.
            </p>
          </div>
          <a className="bg-white hover:bg-main-green w-fit h-fit p-5 pr-6 pl-6 text-xs font-bold rounded-md z-10 transition-all">
            GET IN TOUCH!
          </a>
        </div>

        {/* Wave Seperator */}
        <svg
          className="absolute left-0 bottom-0 z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L120,122.7C240,149,480,203,720,208C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </header>
      
    </div>
  );
};

export default Header;
