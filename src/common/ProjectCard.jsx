import React from "react";

function ProjectCard({ src, link, h4, p, technologies }) {
  return (
    <div className={styles.card} style={{ backgroundColor: "#f9f9f9" }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img style={styles.img} src={src} alt={`${h4} logo`} />
        <h4 style={{ color: "black" }}>{h4}</h4>
        <p style={{ color: "black" }}>{p}</p>
      </a>
      <div style={styles.technologies}>
        {technologies.map((tech, index) => (
          <span key={index} style={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "300px",
    height: "500px",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "250px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  technologies: {
    marginTop: "10px",
  },
  techBadge: {
    display: "inline-block",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    padding: "5px 10px",
    margin: "5px",
    fontSize: "14px",
  },
};

export default ProjectCard;
