import BikePage from "./BikePage";
import CarPage from "./CarPage";
import EstatePage from "./EstatePage";
import AirCraftPage from "./AirCraftPage";
import HomePage from "./HomePage";
import JetPage from "./JetPage";
import MidSectionGallery from "./MidSectionGallery";
import YachtPage from "./YachtPage";
import FeaturedCategories from "./featuredCategoreis";
import NewAndTrending from "./newAndTrending";
import AmphibiousPage from "./AmphibiousPage";
import SubmarinePage from "./SubmarinePage";
import ATVPage from "./ATVPage";
import RVPage from "./RVPage";

export default function midSection({
  YachtProps,
  EstateProps,
  AircraftProps,
  HomeProps,
  BikeProps,
  CarProps,
  AmphibiousProps,
  SubmarineProps,
  ATVProps,
  RVProps,
}) {
  return (
    <div>
      {YachtProps && <YachtPage />}
      {EstateProps && <EstatePage />}
      {AircraftProps && <AirCraftPage />}
      {BikeProps && <BikePage />}
      {CarProps && <CarPage />}
      <FeaturedCategories />
      {/* <MidSectionGallery/>*/}
      {/*<NewAndTrending/>*/}
    </div>
  );
}
