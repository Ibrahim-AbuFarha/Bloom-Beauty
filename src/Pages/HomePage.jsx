// collection of your components page
import CarouselWrapper from "../components/HomePage/CarouselWrapper";
import BestSellerWrapper from "../components/HomePage/BestSellerWrapper";
import YoutubeSection from "../components/HomePage/Youtube";
// import Testimonials from "../components/HomePage/Testimonials";
export default function HomePage() {
  return (
    <>
      <CarouselWrapper />
      <BestSellerWrapper />
      <YoutubeSection />
      {/* <Testimonials /> */}
    </>
  );
}
