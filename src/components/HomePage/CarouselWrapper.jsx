import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./stylehome.css";
import { useNavigate } from "react-router-dom";
export default function CarouselWrapper() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <div id=" carouselExample" className="carousel slide landing-hero">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://media.discordapp.net/attachments/1084370144588988447/1122239886196482048/Black_And_White_Minimal_Glamour_Makeup_Banner_Facebook_Cover_1640_800_px.png?width=1373&height=670"
            className="d-block w-100"
            alt="Make up hero photo"
          />
        </div>
      </div>
      <button
        type="button"
        class="btn fw-bold shop-now-btn float-right btn-light"
        onClick={handleClick}
      >
        SHOP NOW
      </button>
    </div>
  );
}
