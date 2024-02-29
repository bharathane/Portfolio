import "./index.css";

const TabItem = (props) => {
  const { single, getIdFromChild, isActive } = props;
  const { id, text, category } = single;

  const clickBtn = () => {
    getIdFromChild(category);
  };

  const applyStyleOnActive = isActive ? "text-deco" : "";

  return (
    <li className="tabitem-list">
      <button type="button" onClick={clickBtn} className={applyStyleOnActive}>
        {text}
      </button>
    </li>
  );
};

export default TabItem;
