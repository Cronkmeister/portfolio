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
          From a young age I have been building. I loved creating structures
          from legos as a kid and later on working as a chef in restaurants.
          Taking individual parts and creating something awesome out of them. I
          find the same joy in coding - writing lines of text, and from them,
          building websites and applications that have purpose, meaning and good
          design. My goal is to work with individuals and businesses to help
          bring their innovations into existence through technology.{" "}
        </p>
        <div className="about__img-container">
          <img className="about__img" alt="headshot" src={headshot}></img>
        </div>
      </div>
      <Divider link="#skills" />
    </section>
  );
}

export default About;
