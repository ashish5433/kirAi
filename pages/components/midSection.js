import BikePage from "./BikePage";
import CarPage from "./CarPage";
import EstatePage from "./EstatePage";
import HelicopterPage from "./HelicopterPage";
import HomePage from "./HomePage";
import JetPage from "./JetPage";
import MidSectionGallery from "./MidSectionGallery";
import YachtPage from "./YachtPage";
import FeaturedCategories from "./featuredCategoreis";
import NewAndTrending from "./newAndTrending";

export default function midSection({
  YachtProps,
  EstateProps,
  HelicopterProps,
  HomeProps,
  JetProps,
  BikeProps,
  CarProps,
}) {
  return (
    <div>
      {YachtProps && <YachtPage />}
      {EstateProps && <EstatePage />}
      {HelicopterProps && <HelicopterPage />}
      {HomeProps && <HomePage />}
      {JetProps && <JetPage />}
      {BikeProps && <BikePage />}
      {CarProps && <CarPage />}
      <FeaturedCategories />
      {/* <MidSectionGallery/>*/}
      {/*<NewAndTrending/>*/}
    </div>
  );
}
