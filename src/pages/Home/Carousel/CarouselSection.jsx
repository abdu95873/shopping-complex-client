import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSection = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
      stopOnHover={true}
      showStatus={false}
      emulateTouch={true}
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
      {/* <div>
        <img src="/images/buildingImages/IMG04.jpg" alt="Building 4" />
      </div> */}
      {/* <div>
        <img src="/images/buildingImages/IMG05.jpg" alt="Building 5" />
      </div> */}
    </Carousel>
  );
};

export default CarouselSection;
