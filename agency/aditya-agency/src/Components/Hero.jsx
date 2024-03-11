import React from "react";
import rightImg from "../assets/Image/rightimg.webp";
import Container from "./Hooks/Container";
import { heroButton, heroDescription, subTitle } from "./allData";
import FadeIn from "./Motion/FadeIn";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-[#000000] z-50">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center lg:pt-28 pt-10">
          <div className=" lg:w-2/3 md:w-1/2 w-full">
            <FadeIn delay={0.3} direction="up">
              <h3 className="text-[21px] tracking-widest  text-primaryClr mb-3">
                {subTitle}
              </h3>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              {" "}
              <h1 className="text-[30px] md:text-[40px] text-whiteClr lg:text-[80px] font-bold  leading-[35px] lg:leading-[80px] md:leading-[60px]">
                WE ARE <span className="text-primaryClr">CREATIVE</span> DESIGN
                AGENCY
              </h1>{" "}
            </FadeIn>

            <FadeIn delay={0.5} direction="up">
              {" "}
              <div className="border-2 rounded lg:my-8 my-6 border-primaryClr w-[180px]"></div>{" "}
            </FadeIn>
            <FadeIn delay={0.6} direction="up">
              <p className="text-[21px] text-whiteClr tracking-wide mt-2 font-light lg:w-[600px] w-full">
                {heroDescription}
              </p>{" "}
            </FadeIn>

            <FadeIn delay={0.7} direction="up">
              <button className="border-[3px] border-primaryClr rounded-sm py-3 px-5 mt-6 text-whiteClr">
                {heroButton}
              </button>
            </FadeIn>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 py-[20px] md:py-0">
            <FadeIn delay={0.4} direction="up">
              <img className="w-full h-full" src={rightImg} alt="" />
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
