import "./index.css";
const ProjectItem = (props) => {
  const { single } = props;
  const { id, name, url, category, repoLink, imageUrl } = single;
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
