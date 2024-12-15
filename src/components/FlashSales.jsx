import React, { useEffect, useState } from "react";
import Container from "./Container";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


const FlashSales = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  let [info, setInfo] = useState([]);

  let getdata = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setInfo(response.data.products);
    });
  };
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    getdata();
    const target = new Date("2025-02-01T00:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();

      const timeRemaining = target - now;

      if (timeRemaining <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
  
    const stars = [];
  
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-[#FFAD33]" />);
    }
  
    // Half star
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-[#FFAD33]" />);
    }
  
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    }
  
    return stars;
  };
  

  return (
    <div className="pt-[120px]">
      <Container>
        <div>
          <div className="flex gap-4 items-center pb-6 cursor-pointer">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
            <div>
              <h3 className="text-[#DB4444] font-sans text-[16px] font-semibold">
                Today’s
              </h3>
            </div>
          </div>

          <div className="flex">
            <div className="flex items-center gap-[87px]">
              <div>
                <h2 className="text-[#000] font-sans text-[36px] font-bold">
                  Flash Sales
                </h2>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <h2 className="text-[12px] font-medium font-sans text-[#000]">
                    Days
                  </h2>
                  <h3 className="text-[32px] font-bold">{timeLeft.days}</h3>
                </div>
                <span className="text-2xl font-bold text-gray-700">:</span>
                <div className="text-center">
                  <h2 className="text-[12px] font-medium font-sans text-[#000]">
                    Hours
                  </h2>
                  <h3 className="text-[32px] font-bold">{timeLeft.hours}</h3>
                </div>
                <span className="text-2xl font-bold text-gray-700">:</span>
                <div className="text-center">
                  <h2 className="text-[12px] font-medium font-sans text-[#000]">
                    Minutes
                  </h2>
                  <h3 className="text-[32px] font-bold">{timeLeft.minutes}</h3>
                </div>
                <span className="text-2xl font-bold text-gray-700">:</span>
                <div className="text-center">
                  <h2 className="text-[12px] font-medium font-sans text-[#000]">
                    Seconds
                  </h2>
                  <h3 className="text-[32px] font-bold">{timeLeft.seconds}</h3>
                </div>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            {info.map((item) => (
              <div key={item.id} className="pr-4 pt-[20px]">
                <div className="bg-[#F5F5F5] flex items-center justify-center relative group">
                  <img src={item.thumbnail} alt={item.title} className="w-full cursor-pointer" />
                  <div className="absolute bottom-0 left-0 w-full bg-[#000] h-[15%] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-[#fff] cursor-pointer">Add To Cart</h3>
                  </div>
                </div>
                <div>
                  <div className="pt-[16px]">
                  <h3 className="font-sans font-semibold text-[16px] text-[#000000] leading-6 cursor-pointer ">{item.title}</h3>
                  <h3 className="font-sans font-semibold text-[16px] text-[#DB4444] leading-6 cursor-pointer ">Price: {item.price}$</h3>
                  <h2 className="flex items-center">Rating:  <span className="ml-2"></span>  {renderStars(item.rating)}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default FlashSales;
