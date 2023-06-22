// import Swiper core and required modules
//INSTAL npm i swiper
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "./ProductCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProductSlider() {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  return (
    <div className="swiper-container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        breakpoints={breakpoints}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductSlider;