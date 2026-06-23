import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function ResumeEducation({ education }) {
  return (
    <section className="card education">
      <h3>
        <FaGraduationCap className="section-icon" />
        Education
      </h3>

      {education.map((edu, index) => (
        <div className="Education" key={index}>
          <h4>
            {edu.qualification}
            <br />
            {edu.field}
          </h4>

          <p className="education-uni">{edu.institution}</p>
          <p className="education-date">{edu.date}</p>
        </div>
      ))}
    </section>
  );
}