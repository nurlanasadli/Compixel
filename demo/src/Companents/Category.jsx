import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Laptop from "../images/1laptop.png";
import Computer from "../images/1computer.png";
import Keyboard from "../images/1keyboards.png";
import Mouse from "../images/1mouse.png";
import Headphones from "../images/1apple.png";
import Videocard from "../images/1videocard.png";
import Refrigeretion from "../images/1refrigeretion.png";
import Motherboard from "../images/1motherboard.png";
import Iapple from "../images/1asus.png";
import Ubl from "../images/ubl.png";
import feat1 from "../images/feat1.jpg";
import feat2 from "../images/feat2.jpg";
import feat3 from "../images/feat3.jpg";
import Circle from "../images/circleicon.png";
import Cubic from "../images/kubicon.png";
import Body1 from "../images/body1.png";
import Body2 from "../images/body2.png";
import Body3 from "../images/body3.png";
import Body4 from "../images/body4.png";
import Discovery1 from "../images/discovery1.jpg";
import Discovery2 from "../images/discovery2.jpg";
import Brand1 from "../images/brand1.gif";
import Brand2 from "../images/brand2.gif";
import Brand3 from "../images/brand3.gif";
import Brand4 from "../images/brand4.gif";
import Brand5 from "../images/brand5.gif";
import Brand6 from "../images/brand6.gif";
import Brand7 from "../images/brand7.gif";
import Brand8 from "../images/brand8.gif";
import Brand9 from "../images/brand9.gif";
import Brand10 from "../images/brand10.gif";
import Brand11 from "../images/brand11.gif";
import Just1 from "../images/just1.png";
import Qr from "../images/QR.png";
import Qrapp from "../images/qr_image.png"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import PhoneInput from "react-phone-number-input";
import { Autoplay, FreeMode, Navigation } from "swiper";

function Category() {
  const [value, setValue] = useState();
  return (
    <>
    <div className="category">
      <div className="category__all">
        <div className="category__swiper">
          <h1 className="cat1">Categories</h1>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwipers"
          >
            <SwiperSlide className="categories1">
              <img className="also" src={Laptop} />{" "}
            </SwiperSlide>
            <SwiperSlide className="categories2">
              <img className="also" src={Computer} />
            </SwiperSlide>
            <SwiperSlide className="categories3">
              {" "}
              <img className="also" src={Keyboard} />
            </SwiperSlide>
            <SwiperSlide className="categories7">
              {" "}
              <img className="also" src={Refrigeretion} />
            </SwiperSlide>
            <SwiperSlide className="categories4">
              {" "}
              <img className="also" src={Mouse} />{" "}
            </SwiperSlide>
            <SwiperSlide className="categories5">
              <img className="also" src={Headphones} />
            </SwiperSlide>
            <SwiperSlide className="categories6">
              {" "}
              <img className="also" src={Videocard} />{" "}
            </SwiperSlide>
            <SwiperSlide className="categories8">
              {" "}
              <img className="also" src={Ubl} />{" "}
            </SwiperSlide>
            <SwiperSlide className="categories9">
              {" "}
              <img className="also" src={Motherboard} />{" "}
            </SwiperSlide>
            <SwiperSlide className="categories10">
              {" "}
              <img className="also" src={Iapple} />{" "}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="category__features">
        <div className="features__all">
          <div className="features__wrapper">
            <h1>COMPIXEL FEATURES</h1>
            <div className="features__images">
              <div className="feat1">
                <img src={feat1} />
              </div>
              <div className="feat2">
                <img src={feat2} />
              </div>
              <div className="feat3">
                <img src={feat3} />
              </div>
            </div>
          </div>

          <div className="features__what">
            <img src={Circle} />
            <div className="cubic__icon">
              <img src={Cubic} />
            </div>
            <div className="what__all">
              <div className="what__fonts">
                <h1>WHAT'S COMPIXEL? </h1>
                <h5>
                  Learn more about Compixel{" "}
                  <i class="fa-regular fa-chevron-right"></i>
                </h5>
              </div>
              <div className="features__body">
                <div className="whats-compixel-all">
                  <div className="whats-compixel-point">
                    <h2>
                      The Leading Tech - <br /> Focused e-Retailer
                    </h2>
                    <p>
                      Today, millions of customers <br /> turn to Compixel to
                      shop for the <br />
                      latest PC components, <br /> consumer electronics, smart{" "}
                      <br /> home, gaming products and <br /> more.
                    </p>
                    <img className="body1" src={Body1} />
                  </div>
                  <div className="whats-compixel-point2">
                    <h2>
                      Reliable & Award- <br /> Winning Experience
                    </h2>
                    <p>
                      Compixel is consistently ranked <br /> as one of the best
                      online <br />
                      shopping destinations, and the <br /> company regularly
                      earns <br />
                      industry-leading customer <br /> service ratings.
                    </p>
                    <img className="body2" src={Body2} />
                    <img className="body4" src={Body4} />
                  </div>
                  <div className="whats-compixel-point3">
                    <div className="body3">
                      <img src={Body3} />
                    </div>
                    <div className="whats-compixel-text">
                      <h2>Global Shopping</h2>
                      <p>
                        Compixel is based in North <br /> America, with a global
                        reach in <br />
                        Europe, South America, Asia <br /> Pacific and the
                        Middle East.
                      </p>
                    </div>
                  </div>
                  <div className="whats-compixel-videos">
                    <div className="compixel__videos">
                      <h2>Welcome To Compixel Studios!</h2>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/gPoQIo6fDn4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features__discovery">
          <div className="discovery__images">
            <img src={Discovery1} />
            <img src={Discovery2} />
          </div>
        </div>
        <div className="dicovery__slider">
          <div className="discovery__slider-all">
            <div className="slider__brands">
              <h1>FEATURED BRANDS</h1>
            </div>
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwipe"
            >
              <SwiperSlide className="brand">
                <img src={Brand1} />{" "}
              </SwiperSlide>
              <SwiperSlide className="brand">
                <img src={Brand2} />{" "}
              </SwiperSlide>
              <SwiperSlide className="brand">
                <img src={Brand3} />{" "}
              </SwiperSlide>
              <SwiperSlide className="brand">
                <img src={Brand4} />{" "}
              </SwiperSlide>
              <SwiperSlide className="brand">
                <img src={Brand5} />{" "}
              </SwiperSlide>
              <SwiperSlide className="brand">
                <img src={Brand6} />{" "}
              </SwiperSlide>
              <SwiperSlide className="brand">
                <img src={Brand7} />{" "}
              </SwiperSlide>
              <SwiperSlide className="brand">
                <img src={Brand8} />{" "}
              </SwiperSlide>
              <SwiperSlide className="brand">
                <img src={Brand9} />{" "}
              </SwiperSlide>
              <SwiperSlide className="brand">
                <img src={Brand10} />{" "}
              </SwiperSlide>
              <SwiperSlide className="brand">
                <img src={Brand11} />{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="popular__products">
          <div className="popular__product">
            <div className="popular__title">
              <h1>POPULAR PRODUCTS</h1>
            </div>
            <div className="popular__box">
              <div className="boxes">
                <div className="bxs">
                  <p>rtx</p>
                  <p className="boldcolor">msi</p>
                  <p>ryzen 5 3600</p>
                  <p className="boldcolor">asus</p>
                  <p>gtx 1080</p>
                  <p className="boldcolor">PS5</p>
                  <p className="boxes3">lian li</p>
                  <p className="boxes3">gtx 1660 super</p>
                  <p className="boxes3">gtx 1650</p>
                  <p className="boldcolor">laptop</p>
                  <p>mouse</p>
                  <p className="boldcolor">ssd</p>
                  <p>1660 super</p>
                  <p className="boldcolor">rtx 2060</p>
                </div>
              </div>
              <div className="boxes1">
                <p className="p1 boxes3">gtx 1060</p>
                <p className="boldcolor boxes3">abs</p>
                <p className="p1">gaming pc</p>
                <p className="p1 boxes3">rtx 2080</p>
                <p className="p1 boxes3">rtx 3080</p>
                <p className="p1 boxes3">graphics card</p>
                <p>gundam</p>
                <p>monitor</p>
                <p className="boxes3">cpu</p>
                <p className="p1">gtx 1660</p>
                <p className="p2 boldcolor">Xbox Series X</p>
                <p className="p1 boldcolor">corsair</p>
              </div>
              <div className="boxes2">
                <p className="p2">gaming laptop</p>
                <p className="p1 boxes3">rtx 2070</p>
                <p>gpu</p>
                <p className="p1 boxes3">motherboard</p>
                <p>ryzen</p>
                <p className="p2  boxes3">gaming monitor</p>
                <p>ram</p>
                <p className="p1 boxes3">keyboard</p>
                <p className="p2">Windows 11 Home</p>
                <p className="p2 boxes3">Windows 11 Pro</p>
              </div>
            </div>
          </div>
          <div className="product__advertisement">
            <h1>ADVERTISEMENT</h1>
          </div>
        </div>
        <div className="deals__receive">
          <div className="receive__all">
            <div className="just__box">
              <img src={Just1} />
              <div className="just__title">
                <h1>DEALS JUST FOR YOU</h1>
              </div>
              <div className="just__inbox">
                <h2>Sign up to receive exclusive offers in your inbox.</h2>
                <div className="input__type">
                  <i class="fa-light fa-envelope"></i>
                  <input type="email" placeholder="Enter your e-mail address" />
                  <button>SIGN UP</button>
                </div>
              </div>
            </div>
            <div className="app__box">
              <div className="app__title">
                <h1>DOWNLOAD OUR APP</h1>
              </div>
              <div className="app__post">
                <h2>
                  Enter your phone number and we'll send you a <br /> download
                  link.
                </h2>
              </div>
              <div className="app__number">
                <PhoneInput
                  placeholder="Enter your phone number"
                  className="phone"
                  country="US"
                  value={value}
                  onChange={setValue}
                />
                <button>SEND LINK</button>
              </div>
              <div className="app__hr">
                <div className="hr1">
                 <hr /> 
                </div>
                <div className="hr__text">
                  <p>OR</p>
                </div>
                <div className="hr2">
                  <hr />
                </div>
              </div>
              <div className="qr__all">
              <div className="app__qr">
                <img src={Qr} />
                <div className="qr__text">
                  <h2>Scan the QR code to <br /> download App</h2>
                  <p>Scan this code with your <br /> phone's camera.</p>
                </div>
              </div>
              <div className="img__app-qr">
                <img src={Qrapp} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Category;
