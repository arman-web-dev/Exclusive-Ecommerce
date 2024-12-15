import React from "react";
import ArrivalOne from "../assets/arrival1.png";
import ArrivalTwo from "../assets/arrival2.png";
import ArrivalThree from "../assets/arrival3.png";
import ArrivalFour from "../assets/arrival4.png";
import Container from "./Container";

const NewArrival = () => {
  return (
    <div>
      <Container>
        <div className="pt-[70px]">
          <div className="flex gap-4 items-center pb-6 cursor-pointer">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
            <div>
              <h3 className="text-[#DB4444] font-sans text-[16px] font-semibold">
                Featured
              </h3>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center gap-[87px]">
              <div>
                <h2 className="text-[#000] font-sans text-[36px] font-bold">
                  New Arrival
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[32px] py-[60px]">
          <div className="w-[49.5%]">
            <img src={ArrivalOne} alt="ArrivalOne" className="w-full" />
          </div>
          <div className="w-[49.5%]">
            <div className="flex flex-col gap-[33px]">
              <img src={ArrivalTwo} alt="ArrivalTwo" className="w-full" />
              <div className="flex gap-[30px]">
                <img src={ArrivalThree} alt="ArrivalThree" className="w-full" />
                <img src={ArrivalFour} alt="ArrivalFour" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
