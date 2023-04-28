import Navbar from "./components/navbar";

import MidSection from "./components/midSection";
import Corousel from "./components/Carousel";
import ProgressBar from "react-progressbar-on-scroll";
import Footer from "./components/footer";
import HomeGradient from "./components/HomeGradient";
import { useState } from "react";
export default function Home() {
  const[yachts,setYachts]=useState(false)
  const[estates,setEstates]=useState(false)
  const[helicopters,setHelicopters]=useState(false)
  const[home,setHome]=useState(true)
  const[jets,setJets]=useState(false)
  const[bikes,setBikes]=useState(false)
  const[cars,setCars]=useState(false)
  return (
    <>
      <div className="nav1">
        <Navbar />
      </div>
      <div className="cor1">
        <HomeGradient
          YachtProps={yachts}
          EstateProps={estates}
          HelicopterProps={helicopters}
          HomeProps={home}
          JetProps={jets}
          BikeProps={bikes}
          CarProps={cars}
          YachtPropsFunction={setYachts}
          EstatePropsFunction={setEstates}
          HelicopterPropsFunction={setHelicopters}
          HomePropsFunction={setHome}
          JetPropsFunction={setJets}
          BikePropsFunction={setBikes}
          CarPropsFunction={setCars}
        />
      </div>
      <MidSection
        YachtProps={yachts}
        EstateProps={estates}
        HelicopterProps={helicopters}
        HomeProps={home}
        JetProps={jets}
        BikeProps={bikes}
        CarProps={cars}
      />
      <Footer />
      <ProgressBar color="black" height={10} position="bottom" />
    </>
  );
}
