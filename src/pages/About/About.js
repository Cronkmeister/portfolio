import "./About.scss";
import Divider from "../../components/Divider/Divider";
import { useInView } from "react-intersection-observer";
import headshot from "../../assests/images/headshot.jpg";

function About() {
  const { ref: titleRef, inView: titleIsVisible } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: textRef, inView: textIsVisible } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 600,
  });

  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <h2
          className={`about__title fade-in ${titleIsVisible ? "appear" : ""}`}
          ref={titleRef}
        >
          About Me
        </h2>
        <p
          className={`about__text fade-in ${textIsVisible ? "appear" : ""}`}
          ref={textRef}
        >
          I’m a web designer and developer based in Vancouver, BC, specializing
          in custom websites for small businesses, startups, and entrepreneurs.
          With a background in both creative and technical fields — from
          professional kitchens to coding — I create modern, responsive websites
          that are not only visually engaging but also optimized for
          performance, SEO, and drive traffic.
          <br />
          <br />
          Whether you’re launching a new brand, improving an existing site, or
          need help translating your vision into a polished online presence, I
          can help you design, build, and deploy a website that reflects your
          goals. Let’s bring your ideas to life with clean code, purposeful
          design, and powerful functionality.
        </p>
        <div
          className={`about__img-container fade-in ${
            textIsVisible ? "appear" : ""
          }`}
        >
          <img className="about__img" alt="headshot" src={headshot}></img>
        </div>
      </div>
      <Divider link="#skills" />
    </section>
  );
}

export default About;
