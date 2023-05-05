import React, { useEffect } from "react";
import CarouselPage from "../Carousel";
import ProductCard from "../ProductCards";
import Footer from "../footer";
import classes from "./../../../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

import { Unica_One, Quicksand, Bebas_Neue, Raleway } from "next/font/google";
import motorYachts from "@/CategoryData/motorYachts";
import sailBoats from "@/CategoryData/sailBoats";
import jets from "@/CategoryData/jets";
import solarYachts from "@/CategoryData/solarYachts";
import tenderYachts from "@/CategoryData/tenderYachts";
import yachtCarousel from "@/CarouselImageData/yachtCarousel";
import estateCarousel from "@/CarouselImageData/estateCarousel";
import jetCarousel from "@/CarouselImageData/jetCarousel";
import bikeCarousel from "@/CarouselImageData/bikeCarousel";
import carCarousel from "@/CarouselImageData/carCarousel";
import submarineCarousel from "@/CarouselImageData/submarineCarousel";
import atvCarousel from "@/CarouselImageData/atvCarousel";
import rvCarousel from "@/CarouselImageData/rvCarousel";
import amphibiousCarousel from "@/CarouselImageData/amphibiousCarousel";

const fontBebas = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const fontUnica = Unica_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function ProductsList() {
  const router = useRouter();
  const categoryDetail = router.query.categoryId;
  // console.log(categoryDetail);
  const [subcategory, setSubcategory] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
  useEffect(() => {
    if (categoryDetail === "jets") {
      setSubcategory(jets);
    } else if (categoryDetail === "motor yachts") {
      setSubcategory(motorYachts);
    } else if (categoryDetail === "tenders") {
      setSubcategory(tenderYachts);
    } else if (categoryDetail === "solar yachts") {
      setSubcategory(solarYachts);
    } else if (categoryDetail === "sail boats") {
      setSubcategory(sailBoats);
    }
  }, []);
  useEffect(() => {
    if (categoryDetail === "amphibious") {
      setCarouselImages(amphibiousCarousel);
    }
    else if (categoryDetail === "motor yachts") {
      setCarouselImages(yachtCarousel);
    }
    else if (categoryDetail === "sail boats") {
      setCarouselImages(yachtCarousel);
    }
    else if (categoryDetail === "solar yachts") {
      setCarouselImages(yachtCarousel);
    }
    else if (categoryDetail === "tenders") {
      setCarouselImages(yachtCarousel);
    }
    else if (categoryDetail === "villas") {
      setCarouselImages(estateCarousel);
    }
    else if (categoryDetail === "private islands") {
      setCarouselImages(estateCarousel);
    }
    else if (categoryDetail === "castle") {
      setCarouselImages(estateCarousel);
    }
    else if (categoryDetail === "land") {
      setCarouselImages(estateCarousel);
    }
    else if (categoryDetail === "beachside properties") {
      setCarouselImages(estateCarousel);
    }
    else if (categoryDetail === "jets") {
      setCarouselImages(jetCarousel);
    }
    else if (categoryDetail === "helicopters") {
      setCarouselImages(jetCarousel);
    }
    else if (categoryDetail === "hovercars") {
      setCarouselImages(jetCarousel);
    }
    else if (categoryDetail === "vtols") {
      setCarouselImages(jetCarousel);
    }
    else if (categoryDetail === "superbike") {
      setCarouselImages(bikeCarousel);
    }
    else if (categoryDetail === "naked") {
      setCarouselImages(bikeCarousel);
    }
    else if (categoryDetail === "electric") {
      setCarouselImages(bikeCarousel);
    }
    else if (categoryDetail === "cruiser") {
      setCarouselImages(bikeCarousel);
    }
    else if (categoryDetail === "touring & adventure") {
      setCarouselImages(bikeCarousel);
    }
    else if (categoryDetail === "dual sport") {
      setCarouselImages(bikeCarousel);
    }
    else if (categoryDetail === "cafe racer") {
      setCarouselImages(bikeCarousel);
    }
    else if (categoryDetail === "retro & classic") {
      setCarouselImages(bikeCarousel);
    }
    else if (categoryDetail === "coupe") {
      setCarouselImages(carCarousel);
    }
    else if (categoryDetail === "hyper cars") {
      setCarouselImages(carCarousel);
    }
    else if (categoryDetail === "super cars") {
      setCarouselImages(carCarousel);
    }
    else if (categoryDetail === "vintage cars") {
      setCarouselImages(carCarousel);
    }
    else if (categoryDetail === "sedan") {
      setCarouselImages(carCarousel);
    }
    else if (categoryDetail === "suv") {
      setCarouselImages(carCarousel);
    }
    else if (categoryDetail === "hatchback") {
      setCarouselImages(carCarousel);
    }
    else if (categoryDetail === "convertible") {
      setCarouselImages(carCarousel);
    }
    else if (categoryDetail === "submarines") {
      setCarouselImages(submarineCarousel);
    }
    else if (categoryDetail === "atv") {
      setCarouselImages(atvCarousel);
    }
    else if (categoryDetail === "rv") {
      setCarouselImages(rvCarousel);
    }
   
  }, []);

  const [yacht, changeYacht] = useState(false);
  return (
    <div>
      <CarouselPage CarouselImages={carouselImages} />
      <div className={classes.overlay_main_title}>
        <h1 className={fontBebas.className}>{categoryDetail}.</h1>
        <div className={classes.carousel_search}>
          <input
            type="text"
            placeholder={`search for ${categoryDetail}...`}
            className={fontUnica.className}
          />
          <button type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className={classes.carousel_icon_div}>
          {subcategory.map((data) => (
            <div className={classes.subcategory_div}>
              <div
                className={
                  yacht
                    ? `${classes.carousel_icons} ${classes.selected}`
                    : `${classes.carousel_icons}`
                }
                // onClick={yachtChangeHandler}
              >
                <span className="material-symbols-outlined">{data.icon}</span>
              </div>
              <h1
                className={`${classes.subcategory_name} ${fontUnica.className}`}
              >
                {data.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ProductCard products={yachtCarousel} />
      </div>
      <Footer />
    </div>
  );
}
