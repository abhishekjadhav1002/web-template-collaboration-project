import React, { useState } from "react";
import Container from "./Hooks/Container";
import search from "../assets/Image/search.png";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "#" },
    { title: "Pages", href: "#" },
    { title: "Contact Us", href: "#" },
  ];
  const handleNavbar = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="bg-blackClr">
      <Container>
        <div className="flex justify-between items-center py-2">
          <h1 className="text-primaryClr font-bold text-3xl">
            ALIYA<span className="font-normal">STUDIO</span>
          </h1>
          <ul className="hidden md:flex items-center lg:space-x-5 md:space-x-[12px]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-lg hover:text-primaryClr transition duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
            <img className="lg:ps-5 ps-4" src={search} alt="" />
          </ul>

          <button className="lg:hidden block mr-6" onClick={handleNavbar}>
            <HiBars3BottomRight
              className="text-whiteClr"
              size={28}
            ></HiBars3BottomRight>
          </button>
        </div>
        {/* for mobile tablet devices  */}
        <div
          className={
            navOpen ? "py-0 block fixed z-20" : "py-0 hidden fixed  z-30"
          }
        >
          <div
            className="h-screen  z-[999] top-0  fixed  bg-black bg-opacity-50"
            onClick={handleNavbar}
          >
            <div className="bg-blackClr w-[380px] top-0 left-0 z-[99999] h-screen fixed">
              <div className="flex items-center px-5 h-14 top-4 right-0 absolute">
                <button
                  className="flex items-center z-50  space-x-3"
                  onClick={handleNavbar}
                >
                  <MdClose size={28} className=" mr-6 text-whiteClr"></MdClose>
                </button>
              </div>
              <div className="h-full  px-10 pb-20 py-3 scroll-smooth">
                <ul className="block mb-7 mt-28">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white text-lg hover:text-primaryClr  flex items-center group py-2  pt-12 justify-center duration-300 transition-all ease-in-out"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <img className=" mx-auto" src={search} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
