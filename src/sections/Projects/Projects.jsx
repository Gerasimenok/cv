import React from "react";
import styles from "./ProjectsStyles.module.css";
import lamoda from "../../assets/lamoda.png";
import reduxNotion from "../../assets/reduxNotion.png";
import todolist from "../../assets/todolist.png";
import spa from "../../assets/spa.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={lamoda}
          link="https://github.com/Gerasimenok/Lamoda"
          h4={<span>Lamoda</span>}
          p={
            <span>
              The project is a online store Lamoda, <br></br>
              providing users with the ability<br></br> to filter and sort
              products <br></br> based on different criteria.
            </span>
          }
          technologies={["React", "JavaScript", "CSS"]}
        />
        <ProjectCard
          src={reduxNotion}
          link="https://github.com/Gerasimenok/Redux"
          h4={<span>Redux Notion</span>}
          p={
            <span>
              Multi-user notes application. The<br></br> solution enables users
              to create,<br></br> edit, delete notes, register, <br></br>
              securely store their data.
            </span>
          }
          technologies={[
            "React",
            "Redux",
            "TailwindCSS",
            "Thunk",
            "json-server",
          ]}
        />
        <ProjectCard
          src={todolist}
          link="https://github.com/Gerasimenok/ToDoList"
          h4={<span>ToDoList</span>}
          p={
            <span>
              This is a multitasking application<br></br> that enables users to
              manage their<br></br> tasks through an intuitive interface
              <br></br> and robust filtering options.
            </span>
          }
          technologies={["React", "JavaScript", "CSS"]}
        />
        <ProjectCard
          src={spa}
          link="https://github.com/Gerasimenok/API-SPA"
          h4={<span>API & SPA</span>}
          p={
            <span>
              The project is a web application <br></br>that displays a list of
              posts, <br></br>enabling users to filter them <br></br>by title
              and interact with the data.{" "}
            </span>
          } 
          technologies={["React", "Node.js", "CSS"]}
        />
      </div>
    </section>
  );
}

export default Projects;
