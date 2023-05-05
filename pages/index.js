import Navbar from "./components/navbar";
// import Product from './components/ProductPage'
import MidSection from "./components/midSection";
import Corousel from "./components/Carousel";
import ProgressBar from "react-progressbar-on-scroll";
import Footer from "./components/footer";
import HomeGradient from "./components/HomeGradient";
import { useState } from "react";
export default function Home() {
  const [yachts, setYachts] = useState(false);
  const [estates, setEstates] = useState(false);
  const [aircrafts, setAircrafts] = useState(false);
  const [home, setHome] = useState(true);
  const [bikes, setBikes] = useState(false);
  const [cars, setCars] = useState(false);
  const [amphibious, setAmphibious] = useState(false);
  const [submarine, setSubmarines] = useState(false);
  const [atv, setATVs] = useState(false);
  const [rv, setRVs] = useState(false);
  return (
    <>
      <div className="nav1">
        <Navbar />
      </div>
      <div className="cor1">
        <HomeGradient
          YachtProps={yachts}
          EstateProps={estates}
          AircraftProps={aircrafts}
          HomeProps={home}
          BikeProps={bikes}
          CarProps={cars}
          AmphibiousProps={amphibious}
          SubmarineProps={submarine}
          ATVProps={atv}
          RVProps={rv}
          YachtPropsFunction={setYachts}
          EstatePropsFunction={setEstates}
          AircraftsPropsFunction={setAircrafts}
          HomePropsFunction={setHome}
          BikePropsFunction={setBikes}
          CarPropsFunction={setCars}
          AmphibiousPropsFunction={setAmphibious}
          SubmarinePropsFunction={setSubmarines}
          ATVPropsFunction={setATVs}
          RVPropsFunction={setRVs}
        />
      </div>
      <MidSection
        YachtProps={yachts}
        EstateProps={estates}
        AircraftProps={aircrafts}
        HomeProps={home}
        BikeProps={bikes}
        CarProps={cars}
        AmphibiousProps={amphibious}
        SubmarineProps={submarine}
        ATVProps={atv}
        RVProps={rv}
      />
      <Footer />
      <ProgressBar color="black" height={10} position="bottom" />
    </>
  );
}
