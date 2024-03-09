import { useEffect } from "react";
import gsap from "gsap";

import "./index.css";

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".image-container",
      {
        x: -500,
      },
      { x: 60, duration: 1 }
    );

    gsap.fromTo(
      ".content-container",
      {
        x: 800,
      },
      { x: -50, duration: 1 }
    );
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1708599850/WhatsApp_Image_2024-02-22_at_4.32.14_PM_hz7geu.jpg"
            alt="home-profile"
            className="home-image"
          />
          <p>Venkata Durga Bharath Manda</p>
        </div>

        <div className="content-container">
          <h1 className="name-heading">
            HI, I'm <span className="bharath-name">Bharath</span>
          </h1>
          <p className="mernstack-para">
            a passionate{" "}
            <span className="bharath-name">MERN Stack Developer</span>
          </p>
          <p className="description">
            I am not just a <span className="bharath-name">coder;</span> I am a{" "}
            <span className="bharath-name">problem solver</span>, a{" "}
            <span className="bharath-name">creative thinker</span>, and a
            <span className="bharath-name"> relentless learner</span>.
            <span className="entra-content">
              {" "}
              My fascination with cutting-edge technologies has led me to
              specialize in the <span className="bharath-name">MERN</span> (sql,
              Express.js, React.js, Node.js){" "}
              <span className="bharath-name">stack</span>, where I blend my
              technical expertise with an artistic touch to craft applications
              that not only meet functional requirements but also deliver a
              delightful user experience.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
