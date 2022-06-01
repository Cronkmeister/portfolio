import "./Skill.scss";
import { useInView } from "react-intersection-observer";

function Skill(props) {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });
  const SkillIcon = props.icon;

  return (
    <>
      <div
        className={`skills__grid-item fade-in ${inView ? "appear" : ""}`}
        ref={ref}
      >
        <SkillIcon className="skills__grid-item--logo" />
        <p className="skills__grid-item--text">{props.skill}</p>
      </div>
    </>
  );
}

export default Skill;
