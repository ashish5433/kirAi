import classes from "./../../styles/Home.module.css";
import { Unica_One, Quicksand, Bebas_Neue, Raleway } from "next/font/google";
import { useState } from "react";
import CarouselPage from "./Carousel";

const fontUnica = Unica_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const fontBebas = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const fontRaleway = Raleway({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function HomeGradient({
  YachtProps,
  EstateProps,
  HelicopterProps,
  HomeProps,
  JetProps,
  BikeProps,
  CarProps,
  YachtPropsFunction,
  EstatePropsFunction,
  HelicopterPropsFunction,
  HomePropsFunction,
  JetPropsFunction,
  BikePropsFunction,
  CarPropsFunction,
}) {
  const [yacht, changeYacht] = useState(false);
  const [estate, changeEstate] = useState(false);
  const [helicopter, changeHelicopter] = useState(false);
  const [home, changeHome] = useState(true);
  const [jet, changeJet] = useState(false);
  const [bike, changeBike] = useState(false);
  const [car, changeCar] = useState(false);

  const yachtChangeHandler = () => {
    if (YachtProps) {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      YachtPropsFunction(false);
    } else {
      changeYacht(true);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      YachtPropsFunction(true);
      EstatePropsFunction(false);
      HelicopterPropsFunction(false);
      HomePropsFunction(false);
      JetPropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
    }
  };
  const estateChangeHandler = () => {
    if (EstateProps) {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      EstatePropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(true);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      EstatePropsFunction(true);
      YachtPropsFunction(false);
      HelicopterPropsFunction(false);
      HomePropsFunction(false);
      JetPropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
    }
  };
  const helicopterChangeHandler = () => {
    if (HelicopterProps) {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      HelicopterPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(true);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      HelicopterPropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      HomePropsFunction(false);
      JetPropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
    }
  };
  const homeChangeHandler = () => {
    if (HomeProps) {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      HomePropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(true);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      HomePropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      HelicopterPropsFunction(false);
      JetPropsFunction(false);

      BikePropsFunction(false);
      CarPropsFunction(false);
    }
  };
  const jetChangeHandler = () => {
    if (JetProps) {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      JetPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(true);
      changeBike(false);
      changeCar(false);
      JetPropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      HelicopterPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
    }
  };
  const bikeChangeHandler = () => {
    if (BikeProps) {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      BikePropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(true);
      changeCar(false);
      BikePropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      HelicopterPropsFunction(false);
      HomePropsFunction(false);
      JetPropsFunction(false);
      CarPropsFunction(false);
    }
  };
  const carChangeHandler = () => {
    if (CarProps) {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(false);
      CarPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeHelicopter(false);
      changeHome(false);
      changeJet(false);
      changeBike(false);
      changeCar(true);
      CarPropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      HelicopterPropsFunction(false);
      HomePropsFunction(false);
      JetPropsFunction(false);
      BikePropsFunction(false);
    }
  };
  return (
    <>
      <CarouselPage />
      <div className={classes.overlay_main_title}>
        <h1 className={fontBebas.className}>SHAUKEENS.</h1>
        <div className={classes.carousel_search}>
          <input type="text" className={fontUnica.className} />
          <button type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className={`${classes.line_span} ${fontRaleway.className}`}>
          <span>ONE SEARCH</span>
          <span> • </span>
          <span>200,000+ LISTINGS</span>
          <span> • </span>
          <span>7,000+ TRUSTED SELLERS</span>
          <span> • </span>
          <span>120 COUNTRIES</span>
        </div>
        <div className={classes.carousel_icon_div}>
          <div
            className={
              yacht
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={yachtChangeHandler}
          >
            <span className="material-symbols-outlined">directions_boat</span>
          </div>
          <div
            className={
              estate
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={estateChangeHandler}
          >
            <span className="material-symbols-outlined">villa</span>
          </div>
          <div
            className={
              helicopter
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={helicopterChangeHandler}
          >
            <span className="material-symbols-outlined">helicopter</span>
          </div>
          <div
            className={
              home
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={homeChangeHandler}
          >
            <span className="material-symbols-outlined">Home</span>
          </div>
          <div
            className={
              jet
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={jetChangeHandler}
          >
            <span className="material-symbols-outlined">flight_takeoff</span>
          </div>
          <div
            className={
              bike
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={bikeChangeHandler}
          >
            <span className="material-symbols-outlined">two_wheeler</span>
          </div>
          <div
            className={
              car
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={carChangeHandler}
          >
            <span className="material-symbols-outlined">directions_car</span>
          </div>
        </div>
      </div>
    </>
  );
}
