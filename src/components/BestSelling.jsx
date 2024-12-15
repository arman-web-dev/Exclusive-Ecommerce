import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


const BestSelling = () => {
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
      useEffect(()=>{
        getdata();
      },[])
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
    <div>
        <Container>
            <div className="pt-[70px]">
            <div className="flex gap-4 items-center pb-6 cursor-pointer">
          <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
          <div>
            <h3 className="text-[#DB4444] font-sans text-[16px] font-semibold">
            This Month
            </h3>
          </div>
        </div>
        <div className="flex">
            <div className="flex items-center gap-[87px]">
              <div>
                <h2 className="text-[#000] font-sans text-[36px] font-bold">
                Best Selling Products
                </h2>
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
        </Container>
    </div>
  )
}

export default BestSelling