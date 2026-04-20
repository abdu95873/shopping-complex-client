import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSection = () => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Carousel
        showArrows
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3500}
        transitionTime={550}
        stopOnHover
        showStatus={false}
        emulateTouch
      >
        <div>
          <img src="/images/buildingImages/IMG01.jpg" alt="Building 1" />
        </div>
        <div>
          <img src="/images/buildingImages/IMG02.jpg" alt="Building 2" />
        </div>
        <div>
          <img src="/images/buildingImages/IMG03.jpg" alt="Building 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
