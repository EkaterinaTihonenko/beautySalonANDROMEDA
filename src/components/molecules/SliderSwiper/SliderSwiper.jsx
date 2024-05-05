import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider_1 from "../../../assets/images/slider/1.jpg";
import Slider_2 from "../../../assets/images/slider/2.jpg";
import Slider_3 from "../../../assets/images/slider/3.jpg";
import Slider_4 from "../../../assets/images/slider/4.jpg";
import Slider_5 from "../../../assets/images/slider/5.jpg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { ImgSrc } from "../../atoms";

export default function SliderSwiper() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide>
        <ImgSrc content={Slider_1} altContent="slide" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <ImgSrc content={Slider_2} altContent="slide" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <ImgSrc content={Slider_3} altContent="slide" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <ImgSrc content={Slider_4} altContent="slide" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <ImgSrc content={Slider_5} altContent="slide" loading="lazy" />
      </SwiperSlide>
    </Swiper>
  );
}
