import { useEffect } from "react";
import gsap from "gsap";

import "./index.css";

const SkillItem = (props) => {
  useEffect(() => {
    gsap.to(".skill-image", {
      rotate: 720,

      duration: 1,
    });
    gsap.fromTo(
      ".skill-text",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 3 }
    );
  }, []);
  const { item } = props;
  const { img, skillName } = item;

  return (
    <li className="skill-item-container">
      <img className="skill-image" src={img} alt="skill" />
      <p className="skill-text">{skillName}</p>
    </li>
  );
};

export default SkillItem;
