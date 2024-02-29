import SkillItem from "../EachSkillItem";

import "./index.css";

const SkillsList = [
  {
    id: 1,
    img: "https://assets.ccbp.in/frontend/react-js/jobby-app/reactjs-img.png",
    skillName: "React",
  },
  {
    id: 2,
    img: "https://assets.ccbp.in/frontend/react-js/jobby-app/nodejs-img.png",
    skillName: "Node",
  },
  {
    id: 3,
    img: "https://assets.ccbp.in/frontend/react-js/jobby-app/python-img.png",
    skillName: "Python",
  },
  //   {id: 4, img: '', skillName: 'Sql'},
  {
    id: 5,
    img: "https://assets.ccbp.in/frontend/react-js/jobby-app/javascript-img.png",
    skillName: "JavaScript",
  },
  {
    id: 6,
    img: "https://assets.ccbp.in/frontend/react-js/jobby-app/css-img.png",
    skillName: "CSS",
  },
  {
    id: 7,
    img: "https://assets.ccbp.in/frontend/react-js/jobby-app/html-img.png",
    skillName: "HTML",
  },
  {
    id: 8,
    img: "https://assets.ccbp.in/frontend/react-js/jobby-app/sqlite-img.png",
    skillName: "SQL Lite",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dr2jqbir9/image/upload/v1708681461/2560px-Bootstrap_logo.svg_ec8vb1.png",
    skillName: "Boot Strap",
  },
  {
    id: 10,
    img: "https://cyclr.com/wp-content/uploads/2022/03/ext-553.png",
    skillName: "MongoDB",
  },
  {
    id: 11,
    img: "https://res.cloudinary.com/dr2jqbir9/image/upload/v1708681547/express-js_bpgjvh.png",
    skillName: "Express js",
  },
];

const About = () => (
  <>
    <div className="about-container">
      <h1 className="hello-viewer">Hello, Viewer,</h1>

      <h1 className="hello-viewer">
        I'm <span className="bharath-name">Bharath.</span>
      </h1>
      <p className="description-para">
        In this section,
        <br />
        I'm going to provide an overview of
        <br /> my <span className="bharath-name">Education</span> ,
        <span className="bharath-name">work</span>,
        <span className="bharath-name">experience</span> and{" "}
        <span className="bharath-name">skill</span> .
        <br /> I have created a collection of{" "}
        <span className="bharath-name">projects</span> that showcase
        <br /> my <span className="bharath-name">skills</span> and{" "}
        <span className="bharath-name">abilities</span> in{" "}
        <span className="bharath-name">MERN Stack</span> technologies
      </p>

      <div className="skills-education-con">
        <div className="education-container">
          <h1 className="education-heading">Education</h1>
          <hr />
          <div className="course-container">
            <h1 className="bharath-name-college">Noble College</h1>
            <p>Degree</p>
            <p>B.com (computers)</p>
            <p>2019-2022</p>
          </div>

          <div className="course-container">
            <h1 className="bharath-name-college">Noble College</h1>
            <p>Intermediate</p>
            <p>C.E.C</p>
            <p>2017-2019</p>
          </div>

          <div className="course-container">
            <h1 className="bharath-name-college">
              George Coronation High School
            </h1>
            <p>Board Of Secondary Education</p>

            <p>2016-2017</p>
          </div>
        </div>
        <ul>
          {SkillsList.map((each) => (
            <SkillItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default About;
