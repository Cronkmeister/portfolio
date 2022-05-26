import "../ProjectSideSwap/ProjectSideSwap.scss";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { AiFillLock } from "react-icons/ai";

function ProjectSideSwap(props) {
  const { ref: myRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "0px 0px -200px 0px",
  });

  return (
    <>
      <div className="proj__container">
        <div
          className={`proj__container--left left fade-in-left ${
            inView ? "appear" : ""
          }`}
          ref={myRef}
        >
          <h3 className="proj__heading">{props.title}</h3>
          <p className="proj__text">{props.description}</p>
          <ul className="proj__tech-list">
            <span className="proj__tech-list--item">{props.tech1}</span>
            <span className="proj__tech-list--item middle">{props.tech2}</span>
            <span className="proj__tech-list--item">{props.tech3}</span>
          </ul>
          {props.private ? (
            <AiFillLock className="proj__icon--lock" />
          ) : (
            <a href={props.github} target="_blank" rel="noreferrer">
              <FiGithub className="proj__icon" />
            </a>
          )}
          <a href={props.website} target="_blank" rel="noreferrer">
            <FiExternalLink className="proj__icon" />
          </a>
        </div>
        <div
          className={`proj__container--right fade-in-right ${
            inView ? "appear" : ""
          }`}
          ref={myRef}
        >
          <img
            className="proj__img"
            src={props.screenshot}
            alt="project screenshot"
          ></img>
        </div>
      </div>
    </>
  );
}

export default ProjectSideSwap;
