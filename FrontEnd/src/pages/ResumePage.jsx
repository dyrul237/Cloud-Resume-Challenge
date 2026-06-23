import React from "react";
import ProfilePic from "../assets/images/Dyrul.jpg";
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaFolderOpen,
  FaProjectDiagram,
  FaAws,
  FaShieldAlt,
} from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import "css/default.css";

import ResumeHeader from "components/resume/ResumeHeader.jsx"
import ResumeSummary from "components/resume/ResumeSummary.jsx"
import ResumeExperience from "components/resume/ResumeExperience.jsx"
import ResumeEducation from "components/resume/ResumeEducation.jsx"
import ResumeCertifications from "components/resume/ResumeCertifications.jsx"
import ResumeSkills from "components/resume/ResumeSkills.jsx"
import ResumeProjects from "components/resume/ResumeProjects.jsx"
import ResumeData from "data/ResumeData.js"

export default function ResumePage() {
  return (
    <>
      <header className="content">
        <div className="profile-section">
          <img src={ProfilePic} alt="Profile" />
        </div>

        {/* Profile Picture */}
        <ResumeHeader profile={ResumeData.profile}></ResumeHeader>

        {/* card intro */}
      </header>

      {/* HEADER CONTENT */}

      <ResumeSummary summary={ResumeData.professionalSummary}></ResumeSummary>

      <div className="resume-grid">
        <div className="left-column">
          <ResumeExperience experience={ResumeData.experience}></ResumeExperience>
          <ResumeSkills skills={ResumeData.skills}></ResumeSkills>
          <ResumeProjects projects={ResumeData.projects}></ResumeProjects>

        </div>
    

        <div className="right-column">
          <ResumeEducation education={ResumeData.education}></ResumeEducation> 
          <ResumeCertifications certifications={ResumeData.certifications}></ResumeCertifications>  
        </div>
      </div>

      {/* grid */}

      <section className="card architecture">
        <h3>Architecture (This Website)</h3>
      </section>

      <footer>
        <div className="visitor-box">
          <div className="visitor-count" id="visitor-count">
            10,200
          </div>
        </div>

        <div className="visitor-label">Total Visitors</div>
      </footer>
    </>
  );
}
