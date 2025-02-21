import mainPhoto from "../../../assets/images/mainPhoto.png";
import secendPhoto from "../../../assets/images/secendPhoto.png";
import therdPhoto from "../../../assets/images/therdPhoto.png";
import fourPhoto from "../../../assets/images/fourPhoto.png";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";



import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function Sweeper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [mainPhoto, secendPhoto, therdPhoto, fourPhoto];

  return (
    <>
      
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`nature-${index + 1}`}
              className="w-[445px] h-auto rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`thumb-${index + 1}`}
              className="w-[80px] h-[80px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Sweeper;
