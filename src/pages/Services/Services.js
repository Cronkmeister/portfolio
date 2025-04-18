import "./Services.scss";

import React from "react";

function Services() {
  return (
    <div className="serv">
      <h2 className="serv__title">Services</h2>
      <section class="container">
        <section class="card__container">
          <div class="card__bx" style={{ "--clr": "#89ec5b" }}>
            <div class="card__data">
              <div class="card__icon">
                <i class="fa-solid fa-paintbrush"></i>
              </div>
              <div class="card__content">
                <h3>Designing</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div class="card__bx" style={{ "--clr": "#eb5ae5" }}>
            <div class="card__data">
              <div class="card__icon">
                <i class="fa-solid fa-code"></i>
              </div>
              <div class="card__content">
                <h3>Develoment</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div class="card__bx" style={{ "--clr": "#5b98eb" }}>
            <div class="card__data">
              <div class="card__icon">
                <i class="fa-brands fa-searchengin"></i>
              </div>
              <div class="card__content">
                <h3>SEO</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Services;
