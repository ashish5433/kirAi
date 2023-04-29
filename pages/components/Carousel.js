import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function CarouselPage() {
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
          <div>
            <div className="overlay"></div>
            <Image
              className="img-slider"
              src="/real_estate.jpg"
              width={1920}
              height={1080}
            />
          </div>

          <div>
            <div className="overlay"></div>

            <Image
              className="img-slider"
              src="/in_estate.jpg"
              width={1920}
              height={1080}
            />
          </div>

          <div>
            <div className="overlay"></div>

            <Image
              className="img-slider"
              src="/in_estate_3.jpg"
              width={1920}
              height={1080}
            />
          </div>

          <div>
            <div className="overlay"></div>

            <Image
              className="img-slider"
              src="/yacht.jpg"
              width={1920}
              height={1080}
            />
          </div>
          <div>
            <div className="overlay"></div>

            <Image
              className="img-slider"
              src="/real_estate_2.jpg"
              width={1920}
              height={1080}
            />
          </div>
          <div>
            <div className="overlay"></div>

            <Image
              className="img-slider"
              src="/cars_3.jpg"
              width={1920}
              height={1080}
            />
          </div>
          <div>
            <div className="overlay"></div>

            <Image
              className="img-slider"
              src="/in_estate_2.jpg"
              width={1920}
              height={1080}
            />
          </div>
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
