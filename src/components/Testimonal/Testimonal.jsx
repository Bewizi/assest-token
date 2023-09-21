// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
// import { Pagination } from 'swiper/modules';

import { FaQuoteRight } from "react-icons/fa";

import "./Testimonal.css";

function Testimonal() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <h5>Join Tayo and Many Others Who Have Found Success</h5>
      </div>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          freeMode={true}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >

        {/* slider one */}
          <SwiperSlide className="testiominal-el">
            <div className="testimonial-1">
              <div className="testimony-person-1">
                <i>
                  <FaQuoteRight />
                </i>
                <h4>Straightfoward & Great Platform</h4>
              </div>
              <p className="client-testimony">
                Tokenized real estate is a game-changer! I love how I can invest
                in properties worldwide without the hassle of managing them. The
                platform is user-friendly, and the returns have been fantastic
              </p>
              <div className="client-image">
                <img
                  className="image"
                  src="images/Forex-trader.png"
                  alt="Micheal Tims"
                />
                <p>
                  Micheal Tims<span>Forex Trader</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        {/* end slider one */}

        {/* slider two */}

          <SwiperSlide className="testiominal-el">
            <div className="testimonial-1">
              <div className="testimony-person-1">
                <i>
                  <FaQuoteRight />
                </i>
                <h4>Straightfoward & Great Platform</h4>
              </div>
              <p className="client-testimony">
                Tokenized real estate is a game-changer! I love how I can invest
                in properties worldwide without the hassle of managing them. The
                platform is user-friendly, and the returns have been fantastic
              </p>
              <div className="client-image">
                <img
                  className="image"
                  src="images/Forex-trader.png"
                  alt="Micheal Tims"
                />
                <p>
                  Micheal Tims<span>Forex Trader</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        {/*end of slider two */}

          {/* slider three */}
          <SwiperSlide className="testiominal-el">
            <div className="testimonial-1">
              <div className="testimony-person-1">
                <i>
                  <FaQuoteRight />
                </i>
                <h4>Straightfoward & Great Platform</h4>
              </div>
              <p className="client-testimony">
                Tokenized real estate is a game-changer! I love how I can invest
                in properties worldwide without the hassle of managing them. The
                platform is user-friendly, and the returns have been fantastic
              </p>
              <div className="client-image">
                <img
                  className="image"
                  src="images/Forex-trader.png"
                  alt="Micheal Tims"
                />
                <p>
                  Micheal Tims<span>Forex Trader</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonal;
