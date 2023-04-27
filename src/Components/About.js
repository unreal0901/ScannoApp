import React from "react";
import Svg2 from "./Svgs/Svg2";

const About = () => {
  return (
    <>
      <section className="about section container" id="about">
        <div className="about__container grid">
          <div className="about__data">
            <h2 className="section__title-center">
              Find Out A Little More <br /> About Us
            </h2>
            <p className="about__description">
              We are a company dedicated to the distribution of products by
              delivery to your home or to the place where you are, with the best
              quality of delivery.
            </p>
          </div>
          <Svg2 />
        </div>
      </section>
    </>
  );
};

export default About;
