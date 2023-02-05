import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide from "./elements/Slide";

const Banner = () => {
  return (
    <div className="relative py-16">
      <div className="absolute w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        // autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Slide url="../images/banner1.jpg" alt="banner-1" />
        </div>
        <div>
          <Slide url="https://links.papareact.com/gi1" alt="gi1" />
        </div>
        <div>
          <Slide url="https://links.papareact.com/6ff" alt="gi2" />
        </div>
        <div>
          <Slide url="https://links.papareact.com/7ma" alt="gi3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
