import React from "react";
import Container from "./Container";
import HeroImg from "../assets/Hero.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div>
      <Container>
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5">
          <div className="w-full lg:w-[20%] overflow-x-auto lg:overflow-visible sidebar-scrollbar-hide">
            <ul className="flex lg:flex-col gap-5 lg:gap-0 whitespace-nowrap lg:border-r lg:pt-[20px]">
              <li className="font-sans text-[14px] lg:border-none border rounded-lg lg:mt-0 px-1 lg:px-0 mt-2 lg:text-[16px] font-normal leading-6 text-[#000] pb-0 lg:pb-[16px]">
                Women Fashion
              </li>
              <li className="font-sans text-[14px] lg:border-none border rounded-lg lg:mt-0 px-1 lg:px-0 mt-2 lg:text-[16px] font-normal leading-6 text-[#000] pb-0 lg:pb-[16px]">
                Men Fashion
              </li>
              <li className="font-sans text-[14px] lg:border-none border rounded-lg lg:mt-0 px-1 lg:px-0 mt-2 lg:text-[16px] font-normal leading-6 text-[#000] pb-0 lg:pb-[16px]">
                Kids Fashion
              </li>
              <li className="font-sans text-[14px] lg:border-none border rounded-lg lg:mt-0 px-1 lg:px-0 mt-2 lg:text-[16px] font-normal leading-6 text-[#000] pb-0 lg:pb-[16px]">
                Accessories
              </li>
              <li className="font-sans text-[14px] lg:border-none border rounded-lg lg:mt-0 px-1 lg:px-0 mt-2 lg:text-[16px] font-normal leading-6 text-[#000] pb-0 lg:pb-[16px]">
                Electronics
              </li>
              <li className="font-sans text-[14px] lg:border-none border rounded-lg lg:mt-0 px-1 lg:px-0 mt-2 lg:text-[16px] font-normal leading-6 text-[#000] pb-0 lg:pb-[16px]">
                Home & Garden
              </li>
              <li className="font-sans text-[14px] lg:border-none border rounded-lg lg:mt-0 px-1 lg:px-0 mt-2 lg:text-[16px] font-normal leading-6 text-[#000] pb-0 lg:pb-[16px]">
                Sports & Outdoors
              </li>
              <li className="font-sans text-[14px] lg:border-none border rounded-lg lg:mt-0 px-1 lg:px-0 mt-2 lg:text-[16px] font-normal leading-6 text-[#000] pb-0 lg:pb-[16px]">
                Beauty & Health
              </li>
            </ul>
          </div>

          {/* Slider Section */}
          <div className="w-full lg:w-[75%] pt-[20px]">
            <Slider {...settings}>
              <div>
                <img src={HeroImg} alt="" className="w-full object-cover" />
              </div>
              <div>
                <img src={HeroImg} alt="" className="w-full object-cover" />
              </div>
              <div>
                <img src={HeroImg} alt="" className="w-full object-cover" />
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
