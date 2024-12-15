import React from "react";
import Hero from "../components/Hero";
import FlashSales from "../components/FlashSales";
import ShopByCategory from "../components/ShopByCategory";
import BestSelling from "../components/BestSelling";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";
import NewArrival from "../components/NewArrival";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <ShopByCategory />
      <BestSelling/>
      <Banner/>
      <OurProducts/>
      <NewArrival/>
      <Services/>
    </div>
  );
};

export default Home;
