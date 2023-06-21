// export default function CarouselWrapper() {
//   return (
//     <>
//       {/* <!-- Carousel wrapper --> */}
//       <div
//         id="carouselMaterialStyle"
//         class="carousel slide carousel-fade"
//         data-mdb-ride="carousel"
//       >
//         {/* <!-- Indicators --> */}
//         <div class="carousel-indicators">
//           <button
//             type="button"
//             data-mdb-target="#carouselMaterialStyle"
//             data-mdb-slide-to="0"
//             class="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-mdb-target="#carouselMaterialStyle"
//             data-mdb-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-mdb-target="#carouselMaterialStyle"
//             data-mdb-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>

//         {/* <!-- Inner --> */}
//         <div class="carousel-inner rounded-5 shadow-4-strong">
//           {/* <!-- Single item --> */}
//           <div class="carousel-item active">
//             <img
//               src="https://images.squarespace-cdn.com/content/v1/51d151b1e4b05d425c859fc9/1568408056980-L575DPEBL27HY6LZ6KYH/Innisfree+Cherry+Blosom.JPG"
//               class="d-block w-100"
//               alt="Sunset Over the City"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Discover your inner beauty with Blossom Glow Kit</h5>
//               <p>Great gift for yourself and loved ones</p>
//             </div>
//           </div>

//           {/* <!-- Single item --> */}
//           <div class="carousel-item">
//             <img
//               src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
//               class="d-block w-100"
//               alt="Canyon at Nigh"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Second slide label</h5>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </div>
//           </div>

//           {/* <!-- Single item --> */}
//           <div class="carousel-item">
//             <img
//               src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
//               class="d-block w-100"
//               alt="Cliff Above a Stormy Sea"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* <!-- Inner --> */}

//         {/* <!-- Controls --> */}
//         <button
//           class="carousel-control-prev"
//           type="button"
//           data-mdb-target="#carouselMaterialStyle"
//           data-mdb-slide="prev"
//         >
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button
//           class="carousel-control-next"
//           type="button"
//           data-mdb-target="#carouselMaterialStyle"
//           data-mdb-slide="next"
//         >
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// }

/////////////////////////
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./stylehome.css";
export default function CarouselWrapper() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://www.abeautyedit.com/wp-content/uploads/2020/06/best-of-maybelline-drugstore-makeup-f2.jpg"
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://i0.wp.com/colleenhobson.com/wp-content/uploads/2020/02/New-Maybelline-Makeup-Feature-Image.png?fit=1000%2C600&ssl=1"
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://assets.boots.com/content/dam/boots/brands/brand---m/maybelline/maybeline_bt-update_21-03-2022/2022-02_maybelline_brand-treatment_50-teaser_maybelline-bestsellers.dam.ts%3D1647873719149.jpg"
        alt="..."
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
