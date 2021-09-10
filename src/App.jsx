import { NavHashLink } from "react-router-hash-link";
import "./App.scss";
import About1 from "./Components/About1";
import Banner from "./Components/Banner";
import NewHeader from "./Components/NewHeader";
import News from "./Components/News";

function App() {
  return (
    <div className="App">
      <NewHeader />
      <div style={{ paddingTop: "110px" }}>
        <Banner />
        <News />
        <div className="relativeFoot">
          <About1 />
          <div className="footer">
            <div className="container">
              <div className="footerLinks">
                <NavHashLink to="/#top" className="navfade">
                  Home
                </NavHashLink>
                <NavHashLink to="/#top" className="navfade">
                  Business Area
                </NavHashLink>
                <NavHashLink to="/#top" className="navfade">
                  About Us
                </NavHashLink>
                <NavHashLink to="/#top" className="navfade">
                  ISO Certificate
                </NavHashLink>
                <NavHashLink to="/#top" className="navfade">
                  Contact Us
                </NavHashLink>
              </div>
              <p>Copyright @ 2021 Jai Hind. All Rights Reserved.</p>
              <p>Website Design by D&C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
