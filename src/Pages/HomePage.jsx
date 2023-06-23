// collection of your components page
import CarouselWrapper from "../components/HomePage/CarouselWrapper";
import BestSellerWrapper from "../components/HomePage/BestSellerWrapper";
import YoutubeSection from "../components/HomePage/Youtube";
// import Testimonials from "../components/HomePage/Testimonials";
export default function HomePage() {
  // const apiKey = "AIzaSyCpBrKkjRQ9mk8TpnPjFN5q4WLdNVREFBQ";
  const videoId = "MTgeUVOxl8E";
  return (
    <>
      <YoutubeSection videoId={videoId} />
      <CarouselWrapper />
      <BestSellerWrapper />
      {/* <Testimonials /> */}
    </>
  );
}
