import "./About.scss";

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <h2 className="about__title" id="about">
          About Me
        </h2>
        <p className="about__text">
          From a young age I have been building. I loved creating structures
          from legos as a kid and later on working as a chef in restaurants.
          Taking individual parts and creating something awesome out of them. I
          find the same joy in coding - writing lines of text, and from them,
          building websites and applications that have purpose, meaning and good
          design. My goal is to work with individuals and businesses to help
          bring their innovations into existence through technology.{" "}
        </p>
      </div>
    </section>
  );
}

export default About;
