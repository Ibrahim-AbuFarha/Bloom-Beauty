import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./stylehome.css";
export default function CarouselWrapper() {
  return (
    <MDBCarousel showIndicators dark fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://scontent.famm11-1.fna.fbcdn.net/v/t39.30808-6/285375166_5331214570232869_3427017445996586933_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=973b4a&_nc_eui2=AeH35YGTTLkDXpfcMlEt78hI5Bu0B4RIeCDkG7QHhEh4IL4MYrcpHBlfwt3w0NE3hEJNBq30XJBnDY695wXXabH-&_nc_ohc=3yQ-tR1bhggAX9KT8Bi&_nc_ht=scontent.famm11-1.fna&oh=00_AfAISi3juLO38JLuFMxLxCnNjLL7PgO8r-JBJpgd4cbM-w&oe=649B39A7"
        alt="..."
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://scontent.famm11-1.fna.fbcdn.net/v/t1.6435-9/70599497_2724171837603835_2283777777939251200_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=973b4a&_nc_eui2=AeEf2di9LjJvnDfGiajLsYRJf60Sh61L0NB_rRKHrUvQ0P4hTk99DKQEXKFHJTIGNd5B-7l5zfWH1J5UH8Mv1nKx&_nc_ohc=WRth9A-q000AX94YcES&_nc_ht=scontent.famm11-1.fna&oh=00_AfAdTeJQnkKvrHeptTIkOeh0KkrloL2h_7KTRvtlXixPdg&oe=64BD281E"
        alt="..."
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://scontent.famm11-1.fna.fbcdn.net/v/t1.6435-9/62426463_2401738443180511_8425750593707966464_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=973b4a&_nc_eui2=AeFVypnLKN9qyfaub2e6YE3JYCvEwXCPLepgK8TBcI8t6ht_-4bVtAHpbYLBfXm75an5zDRvwLaUBUW_nwI3M2Re&_nc_ohc=pmOuyhLNIGoAX-kKlKM&_nc_oc=AQmGaCt3JJU62pMF-K6SW5AxLV-NJ6oSdOMzUoE6dTYDHThghvOq40uejLRYro-lwAQ&_nc_ht=scontent.famm11-1.fna&oh=00_AfDOD668xqufrPPHvLeXXo8SWkpAR9aOXDVPF0Vw0FoyyA&oe=64BD45DC"
        alt="..."
      ></MDBCarouselItem>
    </MDBCarousel>
  );
}
