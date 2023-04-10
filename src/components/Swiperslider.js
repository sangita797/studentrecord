import React from "react";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Swiperslider() {
  return (
    <div className="swiper-slider-wr home-demo">
      <h3>Swiper Slider</h3>
      <div className="container">
        <Swiper
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
          },
          375: {
            width: 375,
            slidesPerView: 1,
          },
          480: {
            width: 480,
            slidesPerView: 1,
          },
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 1,
          
          },
          980: {
            width: 980,
            slidesPerView: 3,
          },
        }}
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
              <div className="item">
                  <h2>Swipe1</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="item">
                  <h2>Swipe2</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="item">
                  <h2>Swipe3</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="item">
                  <h2>Swipe4</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="item">
                  <h2>Swipe5</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="item">
                  <h2>Swipe7</h2>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Swiperslider;
