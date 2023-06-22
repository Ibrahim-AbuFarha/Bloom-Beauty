// collection of your components page
import CarouselWrapper from "../components/HomePage/CarouselWrapper";
import BestSellerWrapper from "../components/HomePage/BestSellerWrapper";
import Testimonials from "../components/HomePage/Testimomials";
export default function HomePage() {
  return (
    <>
      <CarouselWrapper />
      <BestSellerWrapper />
      <Testimonials />
    </>
  );
}
