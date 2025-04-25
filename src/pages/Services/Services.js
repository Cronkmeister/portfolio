import "./Services.scss";

import React from "react";

import Divider from "../../components/Divider/Divider";

import design from "../../assests/icons/pixeltrue-icons-web-design.svg";
import development from "../../assests/icons/pixeltrue-icons-building-website.svg";
import seo from "../../assests/icons/pixeltrue-icons-seo-2.svg";

function Services() {
  return (
    <section className="serv" id="services">
      <h2 className="serv__title">Services</h2>
      <div class="container">
        <div class="card__container">
          <div class="card__bx" style={{ "--clr": "#FAB099" }}>
            <div class="card__data">
              <div class="card__ic">
                <img
                  className="card__icon"
                  src={design}
                  alt="illustration of paint brushes over screen"
                />
              </div>
              <div class="card__content">
                <h3>Design</h3>
                <p>
                  Crafting modern, user-friendly designs that bring your brand
                  to life.
                </p>
                {/* <a href="">Read More</a> */}
              </div>
            </div>
          </div>
          <div class="card__bx" style={{ "--clr": "#93D6FF" }}>
            <div class="card__data">
              <div class="card__icon">
                <img
                  className="card__icon"
                  src={development}
                  alt="illustration of desktop with tetris icons"
                />
              </div>
              <div class="card__content">
                <h3>Develoment</h3>
                <p>
                  Building fast, functional, and fully responsive websites that
                  work on every device.
                </p>
                {/* <a href="">Read More</a> */}
              </div>
            </div>
          </div>
          <div class="card__bx" style={{ "--clr": "#CFF8AB" }}>
            <div class="card__data">
              <div class="card__icon">
                <img
                  className="card__icon"
                  src={seo}
                  alt="illustration of magnifying glass over screen"
                />
              </div>
              <div class="card__content">
                <h3>SEO</h3>
                <p>
                  Optimizing your website to rank higher, load faster, and
                  attract the right audience.
                </p>
                {/* <a href="">Read More</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider link="#about" />
      {/* Illustration by <a href="https://icons8.com/illustrations/author/ARh4OKrFtdfC">Pixeltrue Ouch!</a> */}
    </section>
  );
}

export default Services;
