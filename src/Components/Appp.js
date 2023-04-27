import React from "react";
import Svg6 from "./Svgs/Svg6";

const Appp = () => {
  return (
    <>
      <section className="app section container" id="download">
        <div className="app__container grid">
          <div className="app__data">
            <h2 className="section__title-center">Download Scanno now</h2>
            <p className="app__description">
              Download the app now and start scanning and saving your contacts
              in seconds.
            </p>
            <div className="app__buttons">
              <a href="#/" className="button button-flex">
                <i className="bx bxl-apple button__icon"></i> App Store
              </a>
              <a href="#/" className="button button-flex">
                <i className="bx bxl-play-store button__icon"></i> Google Play
              </a>
            </div>
          </div>
          <Svg6 />
        </div>
      </section>
    </>
  );
};

export default Appp;
