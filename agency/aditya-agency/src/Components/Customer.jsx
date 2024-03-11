import React from "react";
import customerImg from "../assets/Image/Rectangle 14.png";
import Container from "./Hooks/Container";
import FadeIn from "./Motion/FadeIn";
import { customerItem } from "./allData";

const Customer = () => {
  return (
    <div
      className="bg-blackClr py-[50px] opacity-95"
      style={{ backgroundImage: `url(${customerImg})` }}
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px] lg:ps-14 ps-8">
          {customerItem?.map((customer, index) => (
            <FadeIn key={index} delay={(index + 1) * 0.3} direction="up">
              <div className="md:w-[250px] w-full mx-auto text-center">
                <img
                  className="mx-auto text-center"
                  src={customer.icon}
                  alt=""
                />
                <h1 className="text-[40px] md:text-[45px] lg:text-[64px] font-bold text-whiteClr mx-auto text-center">
                  {customer.count}
                </h1>
                <h2 className="text-[17px] md:text-[21px]   text-primaryClr tracking-wide">
                  {customer.name}
                </h2>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Customer;
