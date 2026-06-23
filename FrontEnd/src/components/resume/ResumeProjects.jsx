import React from "react";
import { FaFolderOpen } from "react-icons/fa";

export default function ResumeProjects({ projects }) {
  return (
    <section className="card projects">
      <h3>
        <FaFolderOpen className="section-icon" />
        Cloud Project
      </h3>

      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <h4>{project.title}</h4>

          <p>{project.description}</p>

          <div className="skill-tags">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}