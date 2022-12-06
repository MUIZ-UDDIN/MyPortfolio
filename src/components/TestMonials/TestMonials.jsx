import React from "react";
import "./TestMonial.css";
import AVTR1 from "../../assists/avatar1.jpg";
import AVTR2 from "../../assists/avatar2.jpg";
import AVTR3 from "../../assists/avatar3.jpg";
import AVTR4 from "../../assists/avatar4.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const TestMonials = () => {
  return (
    <section id="testimonials">
      <h5>Revie from clinents</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="clinet__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            labore, inventore a placeat perspiciatis laboriosam cupiditate quae
            reiciendis aperiam officiis totam. Error consectetur iure ullam quia
            sequi similique nam natus?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clinet__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            labore, inventore a placeat perspiciatis laboriosam cupiditate quae
            reiciendis aperiam officiis totam. Error consectetur iure ullam quia
            sequi similique nam natus?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clinet__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            labore, inventore a placeat perspiciatis laboriosam cupiditate quae
            reiciendis aperiam officiis totam. Error consectetur iure ullam quia
            sequi similique nam natus?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clinet__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            labore, inventore a placeat perspiciatis laboriosam cupiditate quae
            reiciendis aperiam officiis totam. Error consectetur iure ullam quia
            sequi similique nam natus?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TestMonials;
