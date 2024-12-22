import styles from "./AboutStyles.module.css";
import Html from "../../assets/Html.png";
import Css from "../../assets/CSS.png";
import Javascript from "../../assets/JS.png";
import ReactLogo from "../../assets/React.png";
import ReduxLogo from "../../assets/Redux.png";
import Tailwind from "../../assets/Tailwind Css.png";
import NodeLogo from "../../assets/NodeLogo.png";
import typescript from "../../assets/typescript.png";
import figma from "../../assets/Figma.png";

const About = () => {
  return (
    <div className={styles["about-container"]} id="about">
      <div className={styles["about-content"]}>
        <div className={styles["text-center"]}>
          <h2 className={styles["about-title"]}>About Me</h2>
          <p className={styles["about-description"]}>
            Frontend Developer with experience in creating intuitive and
            visually appealing interfaces. I leverage modern technologies to
            build responsive and high-performance web applications, aiming to
            deliver an excellent user experience.{" "}
          </p>
        </div>
        <div className={styles["about-grid"]}>
          <div className={styles["about-journey"]}>
            <h3 className={styles["journey-title"]}>My Journey</h3>
            <p className={styles["journey-description"]}>
              I started my journey in web development fueled by a desire to
              build intuitive and scalable applications. With expertise in a
              variety of technologies, I have worked on projects such as a
              Lamoda clone and a note-taking app, highlighting my skill in
              crafting sleek and user-friendly frontend designs. These projects
              have broadened my knowledge of frontend development and improved
              my problem-solving abilities.
            </p>
          </div>
          <br></br>
          <br></br>
          <div className={styles["skills-container"]}>
            <h3 className={styles["skills-title"]}>Skills & Expertise</h3>
            <div className={styles["skills-list"]}>
              <div className={styles["skill-item"]}>
                <img src={Html} alt="HTML" className={styles["skill-icon"]} />
                <span className={styles["skill-name"]}>HTML</span>
              </div>
              <div className={styles["skill-item"]}>
                <img src={Css} alt="CSS" className={styles["skill-icon"]} />
                <span className={styles["skill-name"]}>CSS</span>
              </div>
              <div className={styles["skill-item"]}>
                <img
                  src={Javascript}
                  alt="JavaScript"
                  className={styles["skill-icon"]}
                />
                <span className={styles["skill-name"]}>JavaScript</span>
              </div>
              <div className={styles["skill-item"]}>
                <img
                  src={ReactLogo}
                  alt="React"
                  className={styles["skill-icon"]}
                />
                <span className={styles["skill-name"]}>React</span>
              </div>
              <div className={styles["skill-item"]}>
                <img
                  src={ReduxLogo}
                  alt="Redux"
                  className={styles["skill-icon"]}
                />
                <span className={styles["skill-name"]}>Redux</span>
              </div>
              <div className={styles["skill-item"]}>
                <img
                  src={Tailwind}
                  alt="Tailwind CSS"
                  className={styles["skill-icon"]}
                />
                <span className={styles["skill-name"]}>Tailwind CSS</span>
              </div>
              <div className={styles["skill-item"]}>
                <img
                  src={NodeLogo}
                  alt="Node.js"
                  className={styles["skill-icon"]}
                />
                <span className={styles["skill-name"]}>Node.js</span>
              </div>
              <div className={styles["skill-item"]}>
                <img
                  src={typescript}
                  alt="TypeScript"
                  className={styles["skill-icon"]}
                />
                <span className={styles["skill-name"]}>TypeScript</span>
              </div>
              <div className={styles["skill-item"]}>
                <img src={figma} alt="Figma" className={styles["skill-icon"]} />
                <span className={styles["skill-name"]}>Figma</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["more-about-me"]}>
          <h1 className={styles["education-title"]}>Education</h1>
          <p className={styles["education-description"]}>
            I studied at Belarusian State University, majoring in Mechanics and
            Mathematics, which provided me with a strong analytical foundation.
          </p>
          <h1 className={styles["freelance-title"]}>Freelance Experience</h1>
          <p className={styles["freelance-description"]}>
            In addition to my studies, I have gained valuable experience working
            as a freelancer, allowing me to refine my skills and tackle diverse
            projects.
          </p>
          <h1 className={styles["languages-title"]}>Languages</h1>
          <p className={styles["languages-description"]}>
            Russian: Native
            <br />
            English: B2
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
