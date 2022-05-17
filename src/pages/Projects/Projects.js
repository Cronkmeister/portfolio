import "./Projects.scss";
import journal_screenshot from "../../assests/images/screenshot-journal.png";

function Projects() {
  return (
    <>
      <section className="projects">
        <div className="projects__wrapper">
          <h2 className="projects__title">Projects</h2>

          <div className="proj">
            <div className="proj__container">
              <div className="proj__container--left">
                <img
                  className="proj__img"
                  src={journal_screenshot}
                  alt="project screenshot"
                ></img>
              </div>
              <div className="proj__container--right">
                <h3 className="proj__heading">Journal</h3>
                <p className="proj__text">
                  An app to showcase my film photographs in a well desgined
                  gallery. A place to bring the photos out of the folder where
                  they were gathering digital dust. View the them in different,
                  appealing ways. See the locations the photos were taken and
                  add information alongside them
                </p>
                <ul className="proj__tech-list">
                  <li className="project__tech-list--item">React</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
