import { Link } from "react-router-dom";

import "./index.css";

const NavLinksBtn = (props) => {
  const { single, setStyleById, isActive } = props;
  const { navTargetTo, displayText, id } = single;
  const clickNavLink = () => {
    setStyleById(id);
  };

  const StyleForActive = isActive ? "acitveStyle" : "";

  return (
    <Link to={navTargetTo} className="nav-links" onClick={clickNavLink}>
      <p className={StyleForActive}>{displayText}</p>
    </Link>
  );
};

export default NavLinksBtn;
