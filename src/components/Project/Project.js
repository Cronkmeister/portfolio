import "./Project.scss";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { AiFillLock } from "react-icons/ai";

function Project(props) {
  const { ref: myRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "0px 0px -200px 0px",
  });

  return (
    <>
      <div className="proj__container">
        <div
          className={`proj__container--left fade-in-left ${
            inView ? "appear" : ""
          }`}
        >
          <a href={props.website} target="_blank" rel="noreferrer">
            <img
              className="proj__img"
              src={props.screenshot}
              alt="project screenshot"
            ></img>
          </a>
        </div>
        <div
          className={`proj__container--right fade-in-right right ${
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
          <div className="proj__icon-container">
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
        </div>
      </div>
    </>
  );
}

export default Project;
