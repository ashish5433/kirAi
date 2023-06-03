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
import Filter from "../Filter/filter";
import Topfilter from "../Filter/topfilter";
import Sidenav from "../sidenav";
import Navbar1 from "../navbar";
import Navbar2 from "../navbar2";
import Relatedtags from "./relatedtags";
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

  const [showFilter, setShowFilter] = useState(false);
  const [gridOrList,setGridOrList] = useState(false)


// sample tags 
const tags=["yacht","yachtlife","yachting","boat","sailing","yachts","luxury","boatlife","sea","boating","superyacht","boat","travel","luxuryyacht","yachtdesign","luxurylifestyle","yachtcharter","yachtlifestyle","summer","sail","megayach","ocean","sailboat","yachtworld","lifestyle","ailinglife","yachtclub","motoryacht","superyachts","sunset"]

  const router = useRouter();
  const categoryDetail = router.query.categoryId;
  // console.log(categoryDetail);
  const [subcategory, setSubcategory] = useState([]);
  const [carouselImages, setCarouselImages] = useState("");
  useEffect(() => {
    if (categoryDetail === "amphibious") {
      setCarouselImages("amphibiousCarousel");
    } else if (
      categoryDetail === "motor yachts" ||
      categoryDetail === "sail boats" ||
      categoryDetail === "solar yachts" ||
      categoryDetail === "tenders"
    ) {
      setCarouselImages("yachtCarousel");
    } else if (
      categoryDetail === "villas" ||
      categoryDetail === "private islands" ||
      categoryDetail === "castle" ||
      categoryDetail === "land" ||
      categoryDetail === "beachside properties"
    ) {
      setCarouselImages("estateCarousel");
    } else if (
      categoryDetail === "jets" ||
      categoryDetail === "helicopters" ||
      categoryDetail === "hovercars" ||
      categoryDetail === "vtols"
    ) {
      setCarouselImages("jetCarousel");
    } else if (
      categoryDetail === "superbike" ||
      categoryDetail === "naked" ||
      categoryDetail === "electric" ||
      categoryDetail === "cruiser" ||
      categoryDetail === "touring & adventure" ||
      categoryDetail === "dual sport" ||
      categoryDetail === "cafe racer" ||
      categoryDetail === "retro & classic"
    ) {
      setCarouselImages("bikeCarousel");
    } else if (
      categoryDetail === "coupe" ||
      categoryDetail === "hyper cars" ||
      categoryDetail === "super cars" ||
      categoryDetail === "vintage cars" ||
      categoryDetail === "sedan" ||
      categoryDetail === "suv" ||
      categoryDetail === "hatchback" ||
      categoryDetail === "convertible"
    ) {
      setCarouselImages("carCarousel");
    } else if (categoryDetail === "submarines") {
      setCarouselImages("submarineCarousel");
    } else if (categoryDetail === "atv") {
      setCarouselImages("atvCarousel");
    } else if (categoryDetail === "rv") {
      setCarouselImages("rvCarousel");
    }
  });
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
  });

  let mainCarousel = [...carouselImages];
  const [yacht, changeYacht] = useState(false);
  return (
    <div>
    <Navbar2/>  {/*........................... navbar */}
    <div className="flex flex-row ">
      <div>
        {showFilter ? <Filter /> : ""}
      </div>
      <div>
      <Relatedtags tags={tags}/>
      <div>
        {carouselImages === "yachtCarousel" ? (
          <CarouselPage CarouselImages={yachtCarousel} />
        ) : carouselImages === "estateCarousel" ? (
          <CarouselPage CarouselImages={estateCarousel} />
        ) : carouselImages === "jetCarousel" ? (
          <CarouselPage CarouselImages={jetCarousel} />
        ) : carouselImages === "bikeCarousel" ? (
          <CarouselPage CarouselImages={bikeCarousel} />
        ) : carouselImages === "carCarousel" ? (
          <CarouselPage CarouselImages={carCarousel} />
        ) : carouselImages === "amphibiousCarousel" ? (
          <CarouselPage CarouselImages={amphibiousCarousel} />
        ) : carouselImages === "submarineCarousel" ? (
          <CarouselPage CarouselImages={submarineCarousel} />
        ) : carouselImages === "atvCarousel" ? (
          <CarouselPage CarouselImages={atvCarousel} />
        ) : (
          <CarouselPage CarouselImages={rvCarousel} />
        )}
      </div>
      <div>
      <div className="flex flex-col mb-40 -mt-[520px] text-neutral-50">
          <h1 style={{fontSize:"8vw"}} className={`m-auto relative ${fontBebas.className}`}>{categoryDetail}.</h1>
            <div className={`m-auto  ${classes.carousel_search}`}>
              <div><input style={{width:"30vw"}}
                type="text"
                placeholder={`search for ${categoryDetail}...`}
                className={` ${fontUnica.className}`}
              /></div>
              <div>
              <button className="relative" type="submit">
                <span className="material-symbols-outlined">search</span>
              </button>
              </div>
            </div>
            
            <div className={`   ${classes.carousel_icon_div}`}>
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
      </div>
      <Topfilter show={showFilter} showFunc={setShowFilter} gridOrList={gridOrList} setGridOrList={setGridOrList} />
      <div className="mx-10">
          <ProductCard products={yachtCarousel} view={gridOrList} />
        </div>
      </div>

      </div>
      <Footer />

    </div>
  );
}
