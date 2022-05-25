import "./Divider.scss";
import { BsChevronCompactDown } from "react-icons/bs";

function Divider(props) {
  return (
    <>
      <div className="divider">
        <a href={props.link}>
          <BsChevronCompactDown className="divider__arrow" />
        </a>
      </div>
    </>
  );
}

export default Divider;
