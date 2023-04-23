import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";

const myFont = localFont({ src: "./Karatone.ttf" });
const play = Unica_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Corousel() {
  return (
    <>
      <div className="overlay-main-title">
        {/* <h1 className={myFont.className}>The World's</h1>
        <h1 className={myFont.className}>Luxury Marketplace</h1>
        <span>ONE SEARCH</span>
        <span>•</span>
        <span>200,000+ LISTINGS</span>
        <span>•</span>
        <span>7,000+ TRUSTED SELLERS</span>
        <span>•</span>
        <span>120 COUNTRIES</span> */}
      </div>
      <div className="img-sliders">
        <Carousel
          autoPlay={true}
          showArrows={true}
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
