import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import NavLinksBtn from "../NavLinksBtn";

import "./index.css";

const navTabs = [
  { id: uuidv4(), navTargetTo: "/", displayText: "Home" },
  { id: uuidv4(), navTargetTo: "/about", displayText: "About" },
  { id: uuidv4(), navTargetTo: "/projects", displayText: "Projects" },
  { id: uuidv4(), navTargetTo: "/contact", displayText: "Contact" },
];

const Header = () => {
  const [isMenuLinksShow, setIsMenuLinksShow] = useState(false);
  const [linkId, setLinkId] = useState(navTabs[0].id);

  const onShowMenuLinksItem = () => {
    setIsMenuLinksShow(!isMenuLinksShow);
  };

  const setStyleById = (id) => {
    setLinkId(id);
  };

  const setStyleForMenuLinks = isMenuLinksShow
    ? "menu-links-container"
    : "hide-menu-links";

  return (
    <>
      <nav>
        <div className="profile-pic-container">
          <img
            src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1708599850/WhatsApp_Image_2024-02-22_at_4.32.14_PM_hz7geu.jpg"
            alt="bharath"
            className="profile-pic"
          />
          <p>Venkata Durga Bharath Manda</p>
        </div>
        <button className="menu-icon" onClick={onShowMenuLinksItem}>
          {isMenuLinksShow ? <p>x</p> : <IoIosMenu />}
        </button>
        <div className="nav-links-container">
          {navTabs.map((each) => (
            <NavLinksBtn
              single={each}
              key={each.id}
              setStyleById={setStyleById}
              isActive={each.id === linkId}
            />
          ))}
        </div>
      </nav>

      <div className={setStyleForMenuLinks}>
        <Link to="/" className="nav-links">
          <p>Home</p>
        </Link>
        <hr />
        <Link to="/about" className="nav-links">
          <p>About</p>
        </Link>
        <hr />
        <Link to="/projects" className="nav-links">
          <p>Projects</p>
        </Link>

        <hr />

        <Link to="/contact" className="nav-links">
          <p>Contact</p>
        </Link>

        <hr />
      </div>
    </>
  );
};

export default Header;
