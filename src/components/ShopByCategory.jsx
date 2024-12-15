import React from "react";
import Container from "./Container";
import CateOne from '../assets/cate1.png'

const ShopByCategory = () => {
  return (
    <div className="pt-[90px]">
      <Container>
        <div className="flex gap-4 items-center pb-6 cursor-pointer">
          <div className="lg:w-5 h-10 w-[32%] 0 bg-[#DB4444] rounded-[4px]"></div>
          <div>
            <h3 className="text-[#DB4444] font-sans text-[16px] font-semibold">
            Categories
            </h3>
          </div>
        </div>
        <div className="flex">
            <div className="flex items-center gap-[87px]">
              <div>
                <h2 className="text-[#000] font-sans text-[36px] font-bold">
                Browse By Category
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:py-[60px] py-7 ">
            <div className="flex lg:gap-[30px] gap-y-[15px] flex-wrap lg:flex-nowrap lg:justify-start justify-between">
               <div className="lg:w-[15%] w-[32%]  hover:bg-[#DB4444] duration-300 hover:border-transparent hover:text-[white] py-[25px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">
               <div className="flex items-center justify-center">
                    <img src={CateOne} alt="" className=""/>
                </div>
                <div className="text-[#000] font-sans text-[16px] font-semibold text-center pt-4">
                  Electronics
                </div>  
               </div>
               <div className="lg:w-[15%] w-[32%]  hover:bg-[#DB4444] duration-300 hover:border-transparent hover:text-[white] py-[25px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">
               <div className="flex items-center justify-center">
                    <img src={CateOne} alt="" className=""/>
                </div>
                <div className="text-[#000] font-sans text-[16px] font-semibold text-center pt-4">
                  Electronics
                </div>  
               </div>
               <div className="lg:w-[15%] w-[32%]  hover:bg-[#DB4444] duration-300 hover:border-transparent hover:text-[white] py-[25px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">
               <div className="flex items-center justify-center">
                    <img src={CateOne} alt="" className=""/>
                </div>
                <div className="text-[#000] font-sans text-[16px] font-semibold text-center pt-4">
                  Electronics
                </div>  
               </div>
               <div className="lg:w-[15%] w-[32%]  hover:bg-[#DB4444] duration-300 hover:border-transparent hover:text-[white] py-[25px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">
               <div className="flex items-center justify-center">
                    <img src={CateOne} alt="" className=""/>
                </div>
                <div className="text-[#000] font-sans text-[16px] font-semibold text-center pt-4">
                  Electronics
                </div>  
               </div>
               <div className="lg:w-[15%] w-[32%]  hover:bg-[#DB4444] duration-300 hover:border-transparent hover:text-[white] py-[25px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">
               <div className="flex items-center justify-center">
                    <img src={CateOne} alt="" className=""/>
                </div>
                <div className="text-[#000] font-sans text-[16px] font-semibold text-center pt-4">
                  Electronics
                </div>  
               </div>
               <div className="lg:w-[15%] w-[32%]  hover:bg-[#DB4444] duration-300 hover:border-transparent hover:text-[white] py-[25px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">
               <div className="flex items-center justify-center">
                    <img src={CateOne} alt="" className=""/>
                </div>
                <div className="text-[#000] font-sans text-[16px] font-semibold text-center pt-4">
                  Electronics
                </div>  
               </div>
            </div>
          </div>
          <hr />
      </Container>
    </div>
  );
};

export default ShopByCategory;
