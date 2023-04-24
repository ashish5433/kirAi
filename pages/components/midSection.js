import MidSectionGallery from './MidSectionGallery'
import FeaturedCategories from './featuredCategoreis'
import NewAndTrending from './newAndTrending'
export default function midSection() {
  return (
    <div>
    <FeaturedCategories />
      <MidSectionGallery/>
      <NewAndTrending/>
      </div>
  );
}
