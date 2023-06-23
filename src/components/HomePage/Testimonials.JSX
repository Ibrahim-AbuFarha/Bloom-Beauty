// import React from "react";
import "./stylehome.css";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBRow,
// } from "mdb-react-ui-kit";

//   function Testimonials() {
//   return (
//     <MDBContainer fluid className="py-5 gradient-custom">
//       <MDBRow className="d-flex justify-content-center">
//         <MDBCol md="12">
//           <div className="text-center mb-4 pb-2">
//             <MDBIcon fas icon="quote-left" size="3x" className="text-white" />
//           </div>
//           <MDBCard>
//             <MDBCardBody className="px-4 py-5">
//               <MDBCarousel showIndicators showControls dark>
//                 <MDBCarouselInner>
//                   <MDBCarouselItem className="active">
//                     <MDBRow className="d-flex justify-content-center">
//                       <MDBCol lg="10" xl="8">
//                         <MDBRow>
//                           <MDBCol
//                             lg="4"
//                             className="d-flex justify-content-center"
//                           >
//                             <img
//                               src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
//                               className="rounded-circle shadow-1 mb-4 mb-lg-0"
//                               alt="woman avatar"
//                               width="150"
//                               height="150"
//                             />
//                           </MDBCol>
//                           <MDBCol
//                             md="9"
//                             lg="7"
//                             xl="8"
//                             className="text-center text-lg-start mx-auto mx-lg-0"
//                           >
//                             <h4 className="mb-4">
//                               Maria Smantha - Web Developer
//                             </h4>
//                             <p className="mb-0 pb-3">
//                               Lorem ipsum dolor sit amet, consectetur
//                               adipisicing elit. A aliquam amet animi blanditiis
//                               consequatur debitis dicta distinctio, enim error
//                               eum iste libero modi nam natus perferendis
//                               possimus quasi sint sit tempora voluptatem. Est,
//                               exercitationem id ipsa ipsum laboriosam
//                               perferendis.
//                             </p>
//                           </MDBCol>
//                         </MDBRow>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBCarouselItem>
//                   <MDBCarouselItem>
//                     <MDBRow className="d-flex justify-content-center">
//                       <MDBCol lg="10" xl="8">
//                         <MDBRow>
//                           <MDBCol
//                             lg="4"
//                             className="d-flex justify-content-center"
//                           >
//                             <img
//                               src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
//                               className="rounded-circle shadow-1 mb-4 mb-lg-0"
//                               alt="woman avatar"
//                               width="150"
//                               height="150"
//                             />
//                           </MDBCol>
//                           <MDBCol
//                             md="9"
//                             lg="7"
//                             xl="8"
//                             className="text-center text-lg-start mx-auto mx-lg-0"
//                           >
//                             <h4 className="mb-4">
//                               Lisa Cudrow - Graphic Designer
//                             </h4>
//                             <p className="mb-0 pb-3">
//                               Sed ut perspiciatis unde omnis iste natus error
//                               sit voluptatem accusantium doloremque laudantium,
//                               totam rem aperiam, eaque ipsa quae ab illo
//                               inventore veritatis et quasi architecto beatae
//                               vitae dicta sunt explicabo. Nemo enim ipsam
//                               voluptatem quia voluptas sit aspernatur.
//                             </p>
//                           </MDBCol>
//                         </MDBRow>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBCarouselItem>
//                   <MDBCarouselItem>
//                     <MDBRow className="d-flex justify-content-center">
//                       <MDBCol lg="10" xl="8">
//                         <MDBRow>
//                           <MDBCol
//                             lg="4"
//                             className="d-flex justify-content-center"
//                           >
//                             <img
//                               src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
//                               className="rounded-circle shadow-1 mb-4 mb-lg-0"
//                               alt="woman avatar"
//                               width="150"
//                               height="150"
//                             />
//                           </MDBCol>
//                           <MDBCol
//                             md="9"
//                             lg="7"
//                             xl="8"
//                             className="text-center text-lg-start mx-auto mx-lg-0"
//                           >
//                             <h4 className="mb-4">
//                               John Smith - Marketing Specialist
//                             </h4>
//                             <p className="mb-0 pb-3">
//                               At vero eos et accusamus et iusto odio dignissimos
//                               qui blanditiis praesentium voluptatum deleniti
//                               atque corrupti quos dolores et quas molestias
//                               excepturi sint occaecati cupiditate non provident,
//                               similique sunt in culpa qui officia mollitia animi
//                               id laborum et dolorum fuga.
//                             </p>
//                           </MDBCol>
//                         </MDBRow>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBCarouselItem>
//                 </MDBCarouselInner>
//               </MDBCarousel>
//             </MDBCardBody>
//           </MDBCard>
//           <div className="text-center mt-4 pt-2">
//             <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default Testimonials;
// export default function Testimonials(){
//   return(
//     <>
//   <div class="testimonials-clean">
//     <div class="container">
//       <div class="intro">
//         <h2 class="text-center">Testimonials </h2>
//         <p class="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
//       </div>
//       <div class="row people">
//         <div class="col-md-6 col-lg-4 item">
//           <div class="box">
//             <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
//           </div>
//           <div class="author"><img class="rounded-circle" src="assets/img/1.jpg">
//             <h5 class="name">Ben Johnson</h5>
//             <p class="title">CEO of Company Inc.</p>
//           </div>
//         </div>
//         <div class="col-md-6 col-lg-4 item">
//           <div class="box">
//             <p class="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id.</p>
//           </div>
//           <div class="author"><img class="rounded-circle" src="assets/img/3.jpg">
//             <h5 class="name">Carl Kent</h5>
//             <p class="title">Founder of Style Co.</p>
//           </div>
//         </div>
//         <div class="col-md-6 col-lg-4 item">
//           <div class="box">
//             <p class="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
//           </div>
//           <div class="author"><img class="rounded-circle" src="assets/img/2.jpg">
//             <h5 class="name">Emily Clark</h5>
//             <p class="title">Owner of Creative Ltd.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//     </>
//   )
// }
