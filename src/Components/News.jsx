import React from "react";
import "./News.scss";
import grey from "../image/box.png";
import line from "../image/line.png";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";

const equipData = [
  {
    image: grey,
    title: "Bathroom Fitting Components",
    para: "Mixer Fittings",
    para2: "Sanitary Fittings",
  },
  {
    image: grey,
    title: "Electrical Wiring Accessories",
    para: "Earthing Parts",
    para2: "Cable Glands",
  },
  {
    image: grey,
    title: "Brass Hardware",
    para: "Miscellenous",
    para2: "Knobs",
  },
];

const News = () => {
  const [effect, setEffect] = useState(false);
  return (
    <div className="equipments">
      <div className="container">
        <div className="head">
          <h2>
            Business Area
            <span>
              <img src={line} alt="line" />
            </span>
          </h2>
          <button className="btn">View All</button>
        </div>
        <div className="Slider">
          <div className="Slide">
            {equipData.map((doc, index) => (
              <div
                className="equipCard"
                key={index}
                onMouseEnter={() => setEffect(true)}
                onMouseLeave={() => setEffect(false)}
              >
                <img src={doc.image} alt="cardImg" loading="lazy" />
                <div className={`circle ${effect ? 'effect' : null}`}></div>
                <div className="pad">
                  <h1 className="heading">{doc.title}</h1>
                  <p>
                    {" "}
                    {"> "} {doc.para}
                  </p>
                  <p>
                    {"> "} {doc.para2}
                  </p>
                  <div className="bottom">
                    <NavHashLink to="/#top" className={`redBtn ${effect ? 'effect' : null}`}>
                      Explore More
                    </NavHashLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
