import React from "react";
import AboutBg from "../assets/Image/aboutRecangle.png";
import aboutImg from "../assets/Image/Untitled design (5).png";
import Container from "./Hooks/Container";
import FadeIn from "./Motion/FadeIn";
import {
  aboutButton,
  aboutDes,
  aboutDescription,
  aboutSubTitle,
  aboutSubTitle2,
} from "../Components/allData";
const About = () => {
  return (
    <div className="bg-blackClr" style={{ backgroundImage: `url(${AboutBg})` }}>
      <Container>
        <div className="flex flex-col md:flex-row justify-between md:items-center  gap-[60px]">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <FadeIn delay={0.3} direction="right">
              <img className="object-cover" src={aboutImg} alt="" />
            </FadeIn>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full mt-[50px] order-first md:order-last">
            <FadeIn delay={0.3} direction="left">
              <h3 className="text-[21px] tracking-widest  text-primaryClr mb-3">
                {aboutSubTitle}
              </h3>{" "}
            </FadeIn>
            <FadeIn delay={0.3} direction="left">
              <h2 className="text-[30px] md:text-[48px] text-whiteClr lg:text-[48px] font-bold  leading-[35px] md:leading-[48px] lg:leading-[50px] ">
                We Bring <span className="text-primaryClr">Creative</span> ideas
                to life.
              </h2>
            </FadeIn>

            <FadeIn delay={0.3} direction="left">
              {" "}
              <div className="border-2 rounded lg:my-8 my-6 border-whiteClr w-[180px]"></div>{" "}
            </FadeIn>
            <FadeIn delay={0.3} direction="left">
              {" "}
              <h5 className="text-[17px] tracking-widest  text-primaryClr mb-3">
                {aboutSubTitle2}
              </h5>
            </FadeIn>
            <FadeIn delay={0.3} direction="left">
              <p className="text-[18px] lg:text-[21px] text-whiteClr tracking-wide mt-2 font-light ">
                {aboutDes}
              </p>
            </FadeIn>
            <FadeIn delay={0.3} direction="left">
              <p className="text-[18px] lg:text-[21px] text-whiteClr tracking-wide mt-2 font-light ">
                {aboutDescription}
              </p>
            </FadeIn>
            <FadeIn delay={0.3} direction="left">
              <button className="border-[3px] border-primaryClr rounded-sm py-3 px-5 mt-6 text-whiteClr">
                {aboutButton}
              </button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
