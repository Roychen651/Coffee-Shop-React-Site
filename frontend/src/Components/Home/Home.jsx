import React from "react";
import HeroImg from "../../assets/coffee2.png";
const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h[600px]
     bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}

            <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl
                font-bold">
                    We sell the richest
                    <span className="text-primary font-cursive"> Coffee Beans </span>
                     in the country
                </h1>
                
            </div>
                
            {/* Image section */}
            <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
                <img src={HeroImg} alt=""
                className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto
                spin "  />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
