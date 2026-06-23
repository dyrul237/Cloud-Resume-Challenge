import React from "react";
import { FaBriefcase } from "react-icons/fa";

export default function ResumeExperience({ experience }) {
  return (
    <section className="card experience">
      <h3>
        <FaBriefcase className="section-icon" />
        Work Experience
      </h3>

      {experience.map((job, index) => (
        <div className="job" key={index}>
          <div className="job-header">
            <div className="job-left">
              <h4 className="job-title">{job.title}</h4>
              <p className="job-company">{job.company}</p>
            </div>

            <p className="job-date">{job.date}</p>
          </div>

          <ul>
            {job.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}