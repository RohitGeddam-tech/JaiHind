import React from "react";
import { NavHashLink } from "react-router-hash-link";
import banner from "../image/box.png";
import arrow from "../image/line.png";
import "./About.scss";

const About1 = () => {
  return (
    <div className="About1">
      <div className="container">
        <div className="aboutImg">
          <img src={banner} alt="about" loading="lazy" />
        </div>
        <div className="aboutDetail">
          <h2>
            About Khandelwal{" "}
            <span>
              <img className="arrow" src={arrow} alt="arrow" />
            </span>
          </h2>
          <h1>
            Mastered on product range & quality coupled with continuous
            innovative approach
          </h1>
          <div className="noImg">
            <img src={banner} alt="about" loading="lazy" />
          </div>
          <p>
            For over last four decades Khandelwal has been known for making good
            quality products in brass material. Khandelwal Group since 1960, has
            mastered on product range & quality, coupled with continuous
            innovative approach. We have been making brass components for
            diversified of industries. The product spectrum is very wide.
            Khandelwal's R & D facilities are equipped with Cad/Cam design
            software.
            <br />
            Our engineers carefully define the technical specifications of all
            our brass products. We consider customer's satisfaction as our gross
            profit.
          </p>
          <div className="bottom">
            <NavHashLink to="/#top" className="btn">
              Read More
            </NavHashLink>
          </div>
        </div>
      </div>
      <div className="base">
        <div className="box call">
          <div className="image"></div>
          <div className="link">
            <p>Call Us At</p>
            <div className="a">
              <a href="tel:+912882560288">+912882560288</a>
              <a href="tel:+912882560759">+912882560759</a>
            </div>
          </div>
        </div>
        <div className="slant"></div>
        <div className="box">
          <div className="image"></div>
          <div className="link">
            <p>Address</p>
            <a href="https://goo.gl/maps/4u2BcgCDtyjioE8s7">
              {/* ask for the address link */}
              459/460, opp.S.B.S., G.I.D.C., P.O. NO. 762 Shanker Tekri
              Industrial Area Jamnagar - 361 004 Gujrat{" "}
            </a>
          </div>
        </div>
        <div className="slant"></div>
        <div className="box">
          <div className="image"></div>
          <div className="link">
            <p>Mail Us At</p>
            <div className="a">
              <a href="mailto:jhbw@sify.com">jhbw@sify.com</a>
              <a href="mailto:jaihind@khandelwalbrass.com">
                jaihind@khandelwalbrass.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
