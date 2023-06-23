import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";

// export default function Youtube() {
//   return (
//     <MDBContainer>
//       <div className="ratio ratio-16x9">
//         <iframe
//           style={{ height: "350" }}
//           src="https://www.youtube.com/watch?v=dmSCJ8eIB3c"
//           title="YouTube video"
//           allowfullscreen
//         ></iframe>
//       </div>
//     </MDBContainer>
//   );
// }
// import YouTube from "react-youtube";

// export default function Youtube() {
//   const videoId = "https://www.youtube.com/watch?v=DrJKf86XDLE";

//   return (
//     <div>
//       {console.log(videoId)}
//       <YouTube videoId={videoId} />
//     </div>
//   );
// }
//
export default function YouTube() {
  return (
    <section className="youtube-section">
      <iframe
        width="660"
        height="315"
        src="https://www.youtube.com/watch?v=MTgeUVOxl8E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  );
}
