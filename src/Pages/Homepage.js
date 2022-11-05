import BannerSlider from '../Components/Banner';
import BrandListing from '../Components/BrandListing';
import CategoryListing from '../Components/CategoryListing';
import FeaturedList from '../Components/FeaturedList';
import MoreBrands from '../Components/MoreBrands';
import NewArrivals from '../Components/NewArrivals';
import NewsLetter from '../Components/NewsLetter';
import ProductSlider from '../Components/ProductSlider';

export default function Homepage() {
  return (
    <>
      <BannerSlider />
      <BrandListing />
      <ProductSlider />
      <MoreBrands />
      <NewArrivals />
      <CategoryListing />
      <FeaturedList />
      <NewsLetter />
    </>
  )
}
