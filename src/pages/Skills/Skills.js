import "./Skills.scss";
import { useInView } from "react-intersection-observer";
import Divider from "../../components/Divider/Divider";
import Skill from "../../components/Skill/Skill";

//icons
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoSass } from "react-icons/io";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiJira,
  SiPostman,
} from "react-icons/si";
import { GrReactjs, GrNode, GrMysql } from "react-icons/gr";
import { FaDatabase, FaGithub, FaTerminal, FaFigma } from "react-icons/fa";

function Skills() {
  const { ref: titleRef, inView: titleIsVisible } = useInView({
    threshold: 1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  return (
    <>
      <section className="skills" id="skills">
        <div className="skills__wrapper">
          <h2
            className={`skills__title fade-in ${
              titleIsVisible ? "appear" : ""
            }`}
            ref={titleRef}
          >
            Skills
          </h2>
          <div className="skills__grid-container">
            {/* front end */}
            <Skill skill="HTML5" icon={AiOutlineHtml5} />
            <Skill skill="CSS" icon={IoLogoCss3} />
            <Skill skill="Javascript" icon={SiJavascript} />
            <Skill skill="Sass" icon={IoLogoSass} />
            <Skill skill="React" icon={GrReactjs} />
            {/* back end */}
            <Skill skill="Node" icon={GrNode} />
            <Skill skill="Express" icon={SiExpress} />
            <Skill skill="MySQL" icon={GrMysql} />
            <Skill skill="MongoDB" icon={SiMongodb} />
            <Skill skill="REST api's" icon={FaDatabase} />
            {/* Other */}
            <Skill skill="Git" icon={FaGithub} />
            <Skill skill="Command Line" icon={FaTerminal} />
            <Skill skill="Jira" icon={SiJira} />
            <Skill skill="Postman" icon={SiPostman} />
            <Skill skill="Figma" icon={FaFigma} />
          </div>
        </div>
        <Divider link="#projects" />
      </section>
    </>
  );
}

export default Skills;
