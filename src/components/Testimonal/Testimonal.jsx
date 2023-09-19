// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';

import {FaQuoteRight} from 'react-icons/fa';

const testimonialdata = [
  {
    id: 1,
    icons: <FaQuoteRight/>,
    Header:"Straightfoward & Great Platform ",
    description: "Tokenized real estate is a game-changer! I love how I can invest in properties worldwide without the hassle of managing them. The platform is user-friendly, and the returns have been fantastic",
    Image:'images/Forex-trader.png',
    name:'Micheal Tims',
    profession:'Forex Trader'
  },
  {
    id: 2,
    icons: <FaQuoteRight/>,
    Header:"Highly Recommended",
    description: "I have always wanted to invest in real estate, but the high entry barriers and lack of liquidity deterred me. That's when I found this tokenized real estate investment website. It's been a game-changer! I can now easily diversify my portfolio with fractional ownership, and the ability to trade tokens provides great liquidity."
  },
  {
    id: 3,
    icons: <FaQuoteRight/>,
    Header:"Easy and Secure",
    description: "As a first-time investor, I was initially skeptical about tokenized real estate. However, this platform exceeded my expectations. The customer support team guided me through the process, and now I feel confident in my investment choices."
  },
]

import "./Testimonal.css";



function Testimonal() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <h5>Join Tayo and Many Others Who Have Found Success</h5>
      </div>
        <div>
          {
            testimonialdata.map((testimonialobj) =>(
              <div key={testimonialobj}>
                <h4><i>{testimonialobj.icons}</i>{testimonialobj.Header}</h4>
                <p>{testimonialobj.description}</p>
                <div>
                <img src={testimonialobj.Image} alt="" /> <p>{testimonialobj.name}</p>
                <a>{testimonialobj.profession}</a>
                </div>
              </div>
            ))
          }
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
        </div>
    </div>
  );
}

export default Testimonal;
