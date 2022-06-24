import "./Projects.scss";
import Project from "../../components/Project/Project";
import ProjectSideSwap from "../../components/ProjectSideSwap/ProjectSideSwap";
//project screenshots
import journal_screenshot from "../../assests/images/screenshot-journal.png";
import dad_jokes from "../../assests/images/dad-joke-generator.png";
import brainflix from "../../assests/images/brainflix.png";
import higherLower from "../../assests/images/higher-lower.png";
import inStock from "../../assests/images/inStock.png";
import bandsite from "../../assests/images/bandsite.png";
import travelSite from "../../assests/images/travel-site.png";

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <div className="projects__wrapper">
          <h2 className="projects__title">Projects</h2>

          <div className="proj">
            <ProjectSideSwap
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
              website="https://journal-jc.netlify.app/"
              private={false}
            />
            <Project
              screenshot={dad_jokes}
              title="Dad Joke Generator"
              description="Playing around with the OpenAI api. Enter a topic and let the generator tell you a jokes. Nevermind the Turing Test, this is the true test for AI"
              tech1="Next.js"
              tech2="OpenAI api"
              tech3="CSS"
              github="https://github.com/Cronkmeister/joke-generator"
              website="https://joke-generator-three.vercel.app/"
              private={false}
            />
            <ProjectSideSwap
              screenshot={brainflix}
              title="Brainflix"
              description="A webpage to simulate a video streaming platform"
              tech1="React"
              tech2="JSON"
              tech3="Express"
              github=""
              website="https://brainflix-jc.netlify.app/"
              private={true}
            />
            <Project
              screenshot={higherLower}
              title="Higher or Lower"
              description="Replicating the classic card game: 'Higher or Lower.' See how many in a row you can get!"
              tech1="Javascript"
              tech2="HTML"
              tech3="SASS"
              github="https://github.com/Cronkmeister/Higher-Or-Lower"
              website="https://higher-lower-jc.herokuapp.com/"
              private={false}
            />
            <ProjectSideSwap
              screenshot={inStock}
              title="In Stock"
              description="Replicating an inventory website with a backend server."
              tech1="React"
              tech2="Express"
              tech3="SASS"
              github="https://github.com/Cronkmeister/inStock"
              website="https://instock-jc.herokuapp.com/"
              private={true}
            />
            <Project
              screenshot={bandsite}
              title="Band Site"
              description="The homepage for a fictional band"
              tech1="HTML"
              tech2="SASS"
              tech3="Javascript"
              github=""
              website="https://bandsite-jc.herokuapp.com/"
              private={true}
            />
            <ProjectSideSwap
              screenshot={travelSite}
              title="Travel Site"
              description="The website for a fictional travel site"
              tech1="HTML"
              tech2="BEM"
              tech3="SASS"
              github=""
              website="https://travelsite-jc.herokuapp.com/"
              private={true}
            />
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
}

export default Projects;
