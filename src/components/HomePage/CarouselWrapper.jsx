import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./stylehome.css";
export default function CarouselWrapper() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.discordapp.com/attachments/1084370144588988447/1121949684307595285/image.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}
