//INSTAL npm i swiper

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "./ProductCard";
import "./ProductSlider.css";

import "swiper/css";

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
function ProductSlider({ products }) {
  return (
    <div className="swiper-container">
      <Swiper
        className="myswiper"
        modules={[Navigation]}
        breakpoints={breakpoints}
        spaceBetween={50}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          disabledClass: "swiper-button-disabled",
        }}
      >
        {products.map((product,indx) => (
          <SwiperSlide key={indx}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev">{'◀'}</div>
      <div className="swiper-button-next">{'▶'}</div>
    </div>
  );
}

export default ProductSlider;
