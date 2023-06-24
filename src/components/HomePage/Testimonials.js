import React, { useState } from "react";
import "./tesimonials.css";
import { faker } from "@faker-js/faker";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

function Testimonials() {
  return (
    <>
      <div className="testimonials-clean">
        <div className="container bd-dark">
          <div className="intro">
            <h1 className="text-center">Testimonials </h1>
            <p className="text-center testimonials-des">
              Our customers love us 🤍! Read what they have to say below.
              Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut
              laoreet vitae.
            </p>
          </div>
          <div className="row people">
            <CardTestimonials
              name="Haneen Emad"
              avatar={faker.image.avatar()}
              text="Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est."
            />
            <CardTestimonials
              name="Sarah Ahamed"
              avatar={faker.image.avatar()}
              text="Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id."
            />
            <CardTestimonials
              name="Maha Zaid"
              avatar={faker.image.avatar()}
              text="Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
function CardTestimonials({ name, avatar, text }) {
  return (
    <div className="col-md-6 col-lg-4 item">
      <div className="box">
        <p className="description">{text}</p>
      </div>
      <div className="author">
        <img className="rounded-circle" src={avatar} alt="avatar photo" />
        <h5 className="name">{name}</h5>
      </div>
    </div>
  );
}
