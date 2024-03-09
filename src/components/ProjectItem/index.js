import { useEffect } from "react";
import gsap from "gsap";
import "./index.css";
const ProjectItem = (props) => {
  useEffect(() => {
    gsap.fromTo(
      ".project-content-container",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 2 }
    );
  }, []);
  const { single } = props;
  const { name, url, repoLink, imageUrl } = single;
  return (
    <li className="project-container">
      <div className="project-content-container">
        <img src={imageUrl} alt={name} className="project-image" />
        <h1>{name}</h1>
        <div className="btn-con">
          <a href={url} target="_blank" rel="noreferrer">
            Live
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer">
            Code
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
