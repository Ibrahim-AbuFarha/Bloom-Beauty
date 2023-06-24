// collection of your components page
// import "../components/HomePage/testimonials.css";
import CarouselWrapper from "../components/HomePage/CarouselWrapper";
import BestSellerWrapper from "../components/HomePage/BestSellerWrapper";
import YoutubeSection from "../components/HomePage/Youtube";
import Testimonials from "../components/HomePage/Testimonials.js";
import CardsDark from "../components/HomePage/CardsDark";
export default function HomePage() {
  // const apiKey = "AIzaSyCpBrKkjRQ9mk8TpnPjFN5q4WLdNVREFBQ";
  const videoId = "nWTHaG0Wpfg";
  return (
    <>
      <CarouselWrapper />

      {/* <BestSellerWrapper /> */}
      <CardsDark />
      <YoutubeSection videoId={videoId} />
      <Testimonials />
    </>
  );
}
