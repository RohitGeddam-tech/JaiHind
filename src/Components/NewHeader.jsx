import React, { useState } from "react";
// import "./Nav.scss";
import "./Header.scss";
import { NavHashLink } from "react-router-hash-link";
import useWindowSize from "./useWindowSize";
import Ham from "./Hamburger";
import XHam from "./Xham";
import logo from "../image/logo.png";

const defaultFormState = {
  code: "",
};

const NewHeader = () => {
  const [width] = useWindowSize();
  const [isActive, setActive] = useState(false);
  const side = isActive ? "side active" : "side";
  const [details, setDetails] = useState({ ...defaultFormState });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const tempDetails = { ...details },
      tempError = { ...error };
    tempDetails[e.target.name] = e.target.value;
    tempError[e.target.name] = "";
    setDetails(tempDetails);
    setError(tempError);
  };

  const validate = () => {
    const tempError = { ...error };
    var emailRegExp = /^[0-9_\-.\s]+$/;

    tempError.code =
      (!details.code && "The email field is required.") ||
      (!emailRegExp.test(details.code) && "The email field is invalid.");

    setError(tempError);
    return Object.values(tempError).some((val) => val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    const errorExist = validate();
    if (!errorExist) {
      console.log("code", details);
    } else {
      console.log("error", error);
    }
  };

  return (
    <div className="nav">
      <NavHashLink to="/#top" className="absoluteImg">
        <img src={logo} alt="logo" onClick={() => setActive(false)} />
      </NavHashLink>
      <div className="mob">
        <div className="container">
          <div className="call">
            <a href="tel:+919820347152" style={{ marginRight: "18px" }}>
              +91 9820347152{" "}
            </a>
            <a href="mailto:jhbw@sify.com">jhbw@sify.com</a>
          </div>
        </div>
      </div>
      {width < 1100 ? (
        <>
          <div className="header">
            <nav className="container">
              {width < 490 ? (
                <div className="nav-image">
                  <NavHashLink to="/#top" onClick={() => setActive(false)}>
                    <img src={logo} alt="logo" />
                  </NavHashLink>
                </div>
              ) : null}
            </nav>
            <div className="nav-links">
              {isActive ? (
                <>
                  <XHam
                    ClickHandle={() => {
                      setActive(!isActive);
                    }}
                  />
                </>
              ) : (
                <Ham
                  ClickHandle={() => {
                    setActive(!isActive);
                  }}
                />
              )}
            </div>
          </div>
          <div className={side}>
            <div className="container">
              <li>
                <NavHashLink to="/#top" className="navfade">
                  Home
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to="/#top" className="navfade">
                  Business Area
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to="/#top" className="navfade">
                  About Us
                </NavHashLink>
              </li>
              {/* <li>
                <NavHashLink to="/#top" className="navfade">
                  ISO Certificate
                </NavHashLink>
              </li> */}
              <li>
                <NavHashLink to="/Contact#top" className="navfade">
                  Contact Us
                </NavHashLink>
              </li>
              <li>
                <form onSubmit={handleSubmit}>
                  <div className="text-input">
                    <input
                      value={details.code}
                      className="input"
                      name="code"
                      type="number"
                      onChange={handleChange}
                    />
                    <label htmlFor="code" className="input-placeholder">
                      Enter Item Code<span>*</span>
                    </label>
                    {/* {error && error.code ? (
                      <p className="error-text">{error.code}</p>
                    ) : null} */}
                  </div>
                  <button type="submit" className="btn">
                    Go
                  </button>
                </form>
              </li>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="header">
            <div className="container">
              {/* <NavHashLink to="/#top">
                <img src={logo} alt="logo" onClick={() => setActive(false)} />
              </NavHashLink> */}
              <div className="navDetails">
                <NavHashLink to="/#top" className="navfade">
                  Home
                </NavHashLink>
                <NavHashLink to="/#top" className="navfade">
                  Business Area
                </NavHashLink>
                <NavHashLink to="/#top" className="navfade">
                  About Us
                </NavHashLink>
                {/* <NavHashLink to="/#top" className="navfade">
                  ISO Certificate
                </NavHashLink> */}
                <NavHashLink to="/#top" className="navfade">
                  Contact Us
                </NavHashLink>
                {/* <NavHashLink
                  to="/Sign#top"
                  className="btn"
                  style={{ marginLeft: "10px" }}
                >
                  Book Now
                </NavHashLink> */}
                <form onSubmit={handleSubmit}>
                  <div className="text-input">
                    <input
                      value={details.code}
                      className="input"
                      name="code"
                      type="number"
                      onChange={handleChange}
                    />
                    <label htmlFor="code" className="input-placeholder">
                      Enter Item Code<span>*</span>
                    </label>
                    {/* {error && error.code ? (
                      <p className="error-text">{error.code}</p>
                    ) : null} */}
                  </div>
                  <button type="submit" className="btn">
                    Go
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewHeader;
