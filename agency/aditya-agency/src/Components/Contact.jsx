import React from "react";
import Container from "./Hooks/Container";
import icon from "../assets/Image/Vector (2).png";
import icon1 from "../assets/Image/Vector (3).png";
import icon2 from "../assets/Image/gmail.png";

const Contact = () => {
  return (
    <div className="bg-blackClr py-[40px]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center lg:gap-[80px] gap-[40px]">
          <div className="w-full md:w-1/2">
            <h2 className="text-[48px] text-whiteClr font-bold">
              Get in <span className="text-primaryClr">TOUCH</span>
            </h2>
            <div className="border-2 rounded lg:my-8 my-6 border-whiteClr w-[100px]"></div>
            <p className="text-[18px] lg:text-[21px] text-whiteClr tracking-wide mt-2 mb-8 font-light">
              Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit NeDque porro{" "}
            </p>
            <div>
              <div className="flex gap-4 text-whiteClr">
                <span>
                  <img src={icon} alt="" />
                </span>
                <div>
                  <h4 className="text-[21px] text-whiteClr tracking-wider font-bold">
                    Office Address
                  </h4>
                  <p className="text-[16px] text-primaryClr tracking-wider">
                    98, Arca St, PR City, 33414 , Indonesia
                  </p>
                </div>
              </div>
              <div className="flex gap-4 text-whiteClr mt-6">
                <span>
                  <img src={icon1} alt="" />
                </span>
                <div>
                  <h4 className="text-[21px] text-whiteClr tracking-wider font-bold">
                    Call Us
                  </h4>
                  <p className="text-[16px] text-primaryClr tracking-wider">
                    (+BK) 123 456 7891
                  </p>
                </div>
              </div>
              <div className="flex gap-4 text-whiteClr mt-6">
                <span>
                  <img src={icon2} alt="" />
                </span>
                <div>
                  <h4 className="text-[21px] text-whiteClr tracking-wider font-bold">
                    Mail Us
                  </h4>
                  <p className="text-[16px] text-primaryClr tracking-wider">
                    info@creaticagency.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <div className="flex-col flex bg-[#12192B] lg:p-12 p-4 rounded">
                <label className="text-[#ccc] tracking-wider mb-2" htmlFor="">
                  YOUR NAME
                </label>
                <input
                  className="border-[1px] border-[#ccc] rounded py-2 text-[#ccc] outline-none bg-transparent"
                  type="text"
                  name=""
                  id=""
                />
                <label
                  className="text-[#ccc]  tracking-wider mb-2 mt-3"
                  htmlFor=""
                >
                  YOUR EMAIL
                </label>
                <input
                  className="border-[1px]  border-[#ccc] rounded py-2 text-[#ccc] outline-none bg-transparent"
                  type="text"
                  name=""
                  id=""
                />
                <label
                  className="text-[#ccc]  tracking-wider mb-2 mt-3"
                  htmlFor=""
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  className="border-[1px] border-[#ccc] rounded py-2  outline-none bg-transparent"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <button className="text-[#111728] font-medium bg-primaryClr px-8 py-3 mx-auto mt-4 rounded">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
