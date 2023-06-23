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
        src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F1685953635_undefined_81131346_celiawebsizeeng-1500x1500.png"
        alt="..."
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F1685358667_undefined_28069200_ftwebsizear-1500x1500.png"
        alt="..."
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F1681205380_undefined_42966515_-Recovered-23-1500x1500.png"
        alt="..."
      ></MDBCarouselItem>
      npm i @fortawesome/fontawesome-free
    </MDBCarousel>
  );
}
