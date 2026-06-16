import React from "react";
import ProfilePic from "../assets/images/Dyrul.jpg"
import {
  FaUser, FaBriefcase,
  FaGraduationCap, FaCode,
  FaCertificate, FaFolderOpen,
  FaProjectDiagram, FaAws,
  FaShieldAlt
} from "react-icons/fa";

import { SiGooglecloud } from "react-icons/si";
import 'css/default.css'

export default function ResumePage() {
  return (
    <>
    <header className="content">
  <div className="profile-section">
    <img src={ProfilePic} alt="Profile" />
  </div>

  {/* Profile Picture */}

  <div className="card">
    <div className="intro-section">
      <h1>Dyrul Syaznan Mohd Daud</h1>
      <h2>Support Engineer | Cloud Enthusiast</h2>

      <p>
        Motivated and detail-oriented Cloud Engineer with a passion for
        building secure and scalable cloud infrastructure.
      </p>

      <div className="contact-info">
        <span>📍 Kuala Lumpur, Malaysia</span>
        <span>📞 014-2533990</span>
        <span>
          <a href="mailto:dyrulsyaznan@gmail.com">
            ✉ dyrulsyaznan@gmail.com
          </a>
        </span>
      </div>

      {/* Contact Info */}

      <div className="Social-Buttons">
        <a href="#">Resume</a>
        <a href="https://github.com/dyrul237" target="_blank" >Github</a>
        <a href="#">Linkedin</a>
      </div>

      {/* Social Buttons */}
    </div>

    {/* intro */}
  </div>

  {/* card intro */}
</header>

{/* HEADER CONTENT */}

<section className="card summary">
  <h3> <FaUser className="section-icon" /> Professional Summary</h3>
  <p>Cloud Engineer with hand-on experience....</p>
</section>

<div className="resume-grid">
  <div className="left-column">
   <section className="card experience">
      <h3><FaBriefcase className="section-icon" /> Work Experience</h3> 
     <div className="job">
        <div className="job-header">
          <div className="job-left">
            <h4 className="job-title">Support Engineer</h4>
           <p className="job-company">O'Connor's Engineering Sdn Bhd</p>
          </div>

         <p className="job-date">Feb 2019 - Present </p>
        </div>

        <ua>
          <li>
          Provided technical and application support across project environments,
          including troubleshooting, issue analysis, and user/project team assistance.
         </li>
          <li>
          Supported TM LAB projects using Spirent iTest Automation,
          including test environment troubleshooting, automated testing support, 
          and fibre/network testing activities.
          </li>
          <li>
          Involved in Kementerian Luar Negeri BCS implementation revamp across both buildings 
          (Wisma Putra 1 and Wisma Putra 2),
          supporting BQ review, material coordination, site execution, 
          and network connectivity testing for WP1 and WP2.
         </li>
          <li>
          Coordinated with internal teams, vendors, and site stakeholders to track work progress, <br />
          resolve site issues, and ensure timely project execution.
          </li>
          <li>
          Collected project status data and prepared monthly progress reports for 
          project meetings and stakeholder updates.
          </li>
        </ua>
      </div>

      <div className="job">
        <div className="job-header">
          <div className="job-left">
            <h4 className="job-title">Software Test Engineer</h4>
            <p className="job-company">Appfuxion Sdn Bhd </p>
          </div>
          <p className="job-date">April 2017 - Feb 2019 </p>
        </div>
        <ua>
          <li>
          Designed and executed test plans and test scenarios for System Integration 
          Testing (SIT), Regression Testing, and Functional Testing.
         </li>

         <li>
          Used HP Application Lifecycle Management (HP ALM) to manage test case 
          execution, defect tracking, and testing workflow documentation.
          </li>

         <li>
          Supported testing activities for banking clients including AMBANK and CIMB, 
          ensuring deliverables were completed within project scope and timeline.
          </li>

          <li>
          Led testing activities for AMBANK&apos;s Mobile Application Terminal (MAT) 
          tablets, helping improve application stability and cross-device
          functionality.
          </li>

          <li>
          Collaborated with developer and business analysts to identify, report, 
          and resolve defects while ensuring alignment with client requirements.
          </li>
        </ua>
      </div>

    </section>
  </div>


  <div className="right-column;">
    <section className="card education">
      <h3> <FaGraduationCap className="section-icon" /> Education</h3>
      <div className="Education">
        <h4> Bachelor Of Engineering (Hons.) <br /> Electronics Engineering</h4>
        <p className="education-uni"> Universiti Teknologi MARA</p>
        <p className="education-date">2014 – 2017</p>
      </div>

      <div className="Education">
        <h4> Diploma in Electronics Engineering (Eletronic)</h4>
        <p className="education-uni"> Universiti Teknologi MARA</p>
        <p className="education-date">2010 – 2013</p>
      </div>
      </section>

    <section className="card certs">
      <h3> <FaCertificate className="section-icon" /> Certification</h3>
      <div className="cert-table">

        <div className="cert-row">
          <SiGooglecloud className="cert-logo-icon gcp-icon" />
          <p>Google Professional Cloud Architect</p>
          <span>2026</span>
        </div>

        <div className="cert-row">
          <SiGooglecloud className="cert-logo-icon gcp-icon" />
          <p>Google Associate Cloud Engineer</p>
          <span>2025</span>
          </div>
        <div className="cert-row">
          <FaAws className="cert-logo-icon aws-icon" />
          <p>AWS Certified Cloud Practitioner</p>
          <span>2023</span>
          </div>
        <div className="cert-row">
          <FaShieldAlt className="cert-logo-icon security-icon"/>
          <p>CEH Certified Network Defender</p>
          <span>2023</span>
        </div>
        
       </div>
    </section>
     
  </div>

  <section className="card skills">
    <h3>Skills</h3>
  </section>

  <section className="card projects">
    <h3>Cloud Projects</h3>
  </section>
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
};

