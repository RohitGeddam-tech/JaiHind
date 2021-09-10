import React from "react";
// import banner from "../image/Banner.png";
// import bannerMob from "../image/mobBanner.webp";
import banner from "../image/banner.png";
import useWindowSize from "./useWindowSize";
import arrow from "../image/line.png";
import "./Banner.scss";
import CustomSlider from "./Slider";

const bannerDetails = [
  {
    image: banner,
    title: "Khandelwal has been known for making",
    span: "good quality",
    para: "products in brass material",
    head: "Since 1960",
  },
  // {
  //   image: banner,
  //   title: "Mirana Resort",
  //   head: "Escape the chaos  with ultra super miramar discounts",
  //   para:'An experience awaits to welcome you.'
  // },
];

const Banner1 = ({ image, title, head, para, span }) => {
  const [width] = useWindowSize();
  return (
    <div className="banner1">
      {width > 540 ? (
        <img src={image} alt="banner" loading="lazy" />
      ) : (
        <img src={image} alt="banner" loading="lazy" />
      )}
      <div className="container">
        <h2>
          {head}
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </h2>
        <h1>
          {title} <span>{span}</span> {para}
        </h1>
        <div className="bottom">
          <button className="btn">Know More</button>
          <button className="btn bord" style={{ marginLeft: "15px" }}>
            Business Area
          </button>
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <CustomSlider>
        {bannerDetails.map((item, index) => (
          <div key={index}>
            <Banner1 {...item} />
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};

export default Banner;
