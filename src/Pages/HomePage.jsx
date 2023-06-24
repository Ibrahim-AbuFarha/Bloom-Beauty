// collection of your components page
// import "../components/HomePage/testimonials.css";
import CarouselWrapper from "../components/HomePage/CarouselWrapper";

import YoutubeSection from "../components/HomePage/Youtube";
import Testimonials from "../components/HomePage/Testimonials.js";
import CardsDark from "../components/HomePage/CardsDark";
import OurTeam from "../components/HomePage/OurTeam";
export default function HomePage() {
  // const apiKey = "AIzaSyCpBrKkjRQ9mk8TpnPjFN5q4WLdNVREFBQ";
  const videoId = "nWTHaG0Wpfg";

  const apiKey = "AIzaSyCpBrKkjRQ9mk8TpnPjFN5q4WLdNVREFBQ";

  return (
    <>
      <CarouselWrapper />

      {/* <BestSellerWrapper /> */}

      <CardsDark />
      <OurTeam />
      <YoutubeSection videoId={videoId} apiKey={apiKey} />
      <Testimonials />
    </>
  );
}
