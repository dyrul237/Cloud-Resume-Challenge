import React from "react";
import ProfilePic from "../assets/images/Dyrul.jpg"

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
        <a href="#">Github</a>
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
  <h3>Professional Summary</h3>
  <p>Cloud Engineer with hand-on experience....</p>
</section>

<div className="grid">
  <section className="card experience">
    <h3>Work Experience</h3>
  </section>

  <section className="card education">
    <h3>Education</h3>
  </section>

  <section className="card skills">
    <h3>Skills</h3>
  </section>

  <section className="card certs">
    <h3>Certification</h3>
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

