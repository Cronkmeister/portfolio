import "./Projects.scss";
import journal_screenshot from "../../assests/images/screenshot-journal.png";
import Project from "../../components/Project/Project";

function Projects() {
  return (
    <>
      <section className="projects">
        <div className="projects__wrapper">
          <h2 className="projects__title">Projects</h2>

          <div className="proj">
            <div className="proj__container">
              <Project
                screenshot={journal_screenshot}
                title="Journal"
                description="An app to showcase my film photographs in a well desgined gallery. A
              place to bring the photos out of the folder where they were gathering
              digital dust. View the them in different, appealing ways. See the
              locations the photos were taken and add information alongside them"
                tech1="React"
                tech2="MySQL"
                tech3="SASS"
                github="https://github.com/Cronkmeister/journal"
                website=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
