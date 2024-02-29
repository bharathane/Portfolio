import "./index.css";

const SkillItem = (props) => {
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
