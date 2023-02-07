import React from "react";
import Category from "../Companents/Category";
import MainSlider from "../Companents/MainSlider";
import Footer from "../Companents/Footer"
import FooterTop from "../Companents/FooterTop";

import ".././App.css";
function HomePage(props) {
  return (
    <div className="homePageRight">
      <div className="homePageSlider">
        <MainSlider />
        {/* <Slider slides={SliderData} /> */}
        {/* <Slider2 slides={Slider2Data} /> */}
      </div>
      <Category />
      <Footer />
      <FooterTop />
    </div>
  );
}

export default HomePage;
