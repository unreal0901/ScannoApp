import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact section container" id="contact">
        <div className="contact__container grid">
          <div className="contact__content">
            <h2 className="section__title-center">Need help?</h2>
            <p className="contact__description">
              visitors can enter their name, email, and message to contact your
              support team
            </p>
          </div>

          <ul className="contact__content grid">
            <li className="contact__address">
              Telephone:{" "}
              <span className="contact__information">999 - XXX- XXX</span>
            </li>
            <li className="contact__address">
              Email:{" "}
              <span className="contact__information">scanno@email.com</span>
            </li>
            <li className="contact__address">
              Location:{" "}
              <span className="contact__information">India - asd</span>
            </li>
          </ul>

          <div className="contact__content">
            <a href="#/" className="button">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
