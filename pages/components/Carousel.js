import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function CarouselPage({CarouselImages}) {
  return (
    <>
      <div className="img-sliders">
        <Carousel
          autoPlay={true}
          showArrows={false}
          interval={4000}
          infiniteLoop={true}
          autoFocus={true}
          showThumbs={false}
          stopOnHover={false}
        >       
          {CarouselImages?.map((data) => (
            <div>
            <div className="overlay"></div>
            <Image
              className="img-slider"
              src={data.image}
              width={1920}
              height={1080}
            />
          </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

//  <div className="carousel-icon-div">
//    <div className="carousel-icons">
//      <span class="material-symbols-outlined">directions_boat</span>
//    </div>
//    <div className="carousel-icons">
//      <span class="material-symbols-outlined">villa</span>
//    </div>
//    <div className="carousel-icons">
//      <span class="material-symbols-outlined">helicopter</span>
//    </div>
//    <div className="carousel-icons">
//      <span class="material-symbols-outlined">flight_takeoff</span>
//    </div>
//    <div className="carousel-icons">
//      <span class="material-symbols-outlined">two_wheeler</span>
//    </div>
//    <div className="carousel-icons">
//      <span class="material-symbols-outlined">directions_car</span>
//    </div>
//  </div>;
