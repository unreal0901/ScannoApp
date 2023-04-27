import React from "react";
import Svg1 from "./Svgs/Svg1";

const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <Svg1 />
          <div className="home__data">
            <h1 className="home__title">
              Scan, save, and organize your contacts with ease
            </h1>
            <p className="home__description">
              Introducing Scanno, the app that scans your visiting cards with
              98% accuracy and saves them to your contacts.
            </p>

            <a href="#/" className="button">
              Download now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
