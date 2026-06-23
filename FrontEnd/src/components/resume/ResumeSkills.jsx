import React from "react";
import { FaCode } from "react-icons/fa";

export default function ResumeSkills({ skills }) {
  return (
    <section className="card skills">
      <h3>
        <FaCode className="section-icon" />
        Technical Skills
      </h3>

      <div className="skills-table">
        {skills.map((skill, index) => (
          <div className="skill-row" key={index}>
            <span className="skill-label">{skill.category}</span>
            <span className="skill-colon">:</span>
            <span className="skill-value">
              {skill.items.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}