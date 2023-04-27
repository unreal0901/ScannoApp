import React from "react";
import Svg3 from "./Svgs/Svg3";
import Svg4 from "./Svgs/Svg3";
import Svg5 from "./Svgs/Svg3";

const Services = () => {
  return (
    <>
      <section className="services section container" id="services">
        <h2 className="section__title">Features</h2>
        <div className="services__container grid">
          <div className="services__data">
            <h3 className="services__subtitle">High accuracy</h3>
            <Svg3 />
            <p className="services__description">
              our advanced OCR technology ensures 98% accuracy in scanning
              visiting cards
            </p>
            <div>
              <a href="#/" className="button button-link">
                Learn More
              </a>
            </div>
          </div>
          <div className="services__data">
            <h3 className="services__subtitle">Save to contacts</h3>
            <Svg4 />
            <p className="services__description">
              seamlessly save the contact information to your device's contacts
            </p>
            <div>
              <a href="#/" className="button button-link">
                Learn More
              </a>
            </div>
          </div>

          <div className="services__data">
            <h3 className="services__subtitle">Easy to use</h3>
            <Svg5 />
            <p className="services__description">
              simply snap a photo of the visiting card and let our app do the
              rest  
            </p>
            <div>
              <a href="#/" className="button button-link">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
