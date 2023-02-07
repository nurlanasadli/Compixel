import sl1 from "../images/slider-img/1.jpg";
import sl2 from "../images/slider-img/2.jpg";
import sl3 from "../images/slider-img/3.jpg";
import sl4 from "../images/slider-img/4.jpg";
import sl5 from "../images/slider-img/5.jpg";
import sl6 from "../images/slider-img/6.jpg";
import mister from "../images/mister.jpg";
import intel from "../images/intel.jpg";
import adobe from "../images/adobe.jpg";
import "./MainSlider.css";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Catalog from "./Catalog";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

function MainSlider() {
  return (
    // <div className="Main">
    <div className="MainSlider">
      <div className="Catalog__main">
        <Catalog />
        <div className="main__boxes">
          <div className="main__boxes1">
            <h3>SIGN IN FOR THE BEST EXPERIENCE</h3>
            <div className="boxes1__button">
              <div className="button__all">
                <button>SIGN IN</button>
                <p>
                  New to Compixel? <span>SIGN UP</span>
                </p>
              </div>
            </div>
          </div>
          <div className="main__boxes2">
            <h3>CATEGORIES YOU MAY BE INTERESTED IN </h3>
            <div className="main__pictures">
              <div className="intel">
                <img src={intel} alt="" />
                <p>Processors - Desktops</p>
              </div>
              <div className="adobe">
                <img src={adobe} alt="" />
                <p>Office & Accounting</p>
              </div>
              <div className="mister">
                <img src={mister} alt="" />
                <p>Gaming</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={sl1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl6} />
        </SwiperSlide>
      </Swiper>
    </div>
    // </div>
  );
}

export default MainSlider;
