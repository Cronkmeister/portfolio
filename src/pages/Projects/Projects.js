import "./Projects.scss";
import Project from "../../components/Project/Project";
import ProjectSideSwap from "../../components/ProjectSideSwap/ProjectSideSwap";

//project screenshots
import tality from "../../assests/images/tality-min.png";
import designStudio from "../../assests/images/161Design-min.png";
import nasa from "../../assests/images/nasa-project.png";
import pong from "../../assests/images/pong.png";
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
              screenshot={tality}
              title="Tality"
              description="Website redesign and modernisation for a cold plunge and sauna company. Design done in figma. Site built on Wix"
              tech1="Figma"
              tech2="Wix"
              tech3="Velo"
              github=""
              website="https://www.talityspa.com/"
              private={true}
            />
            <Project
              screenshot={designStudio}
              title="161 Design Studio"
              description="Fixed styling issues, responsive screen sizes and custom fonts. Introduced analytics and optimized for SEO"
              tech1="Wordpress"
              tech2="Divi"
              tech3="Figma"
              github=""
              website="https://161designstudio.com/"
              private={true}
            />

            <ProjectSideSwap
              screenshot={nasa}
              title="NASA Project"
              description="Using the NASA and SpaceX APIs to schedule future rokcet launches as well, see upcoming launches and past missions."
              tech1="Node"
              tech2="Express"
              tech3="MongoDB"
              github="https://github.com/Cronkmeister/nasa-project"
              website="https://nasa-project.up.railway.app/"
              private={false}
            />
            <Project
              screenshot={pong}
              title="Pong"
              description="Replicating the classic game of pong. Using websockets to make it multi-player."
              tech1="Javascript"
              tech2="Socket.io"
              tech3="Docker"
              github="https://github.com/Cronkmeister/multi-player-pong"
              website="https://multi-player-pong.up.railway.app/"
              private={false}
            />
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
              website="https://higher-lower-jc.netlify.app/"
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
              website="https://instock-jc.netlify.app/"
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
              website="https://bandsite-jc.netlify.app/"
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
              website="https://travel-sitejc.netlify.app/"
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
