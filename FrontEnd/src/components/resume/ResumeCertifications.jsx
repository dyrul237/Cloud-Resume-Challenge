import React from "react";
import { FaCertificate, FaAws, FaShieldAlt } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";

export default function ResumeCertifications({ certifications, training }) {
  const certIcons = {
    gcp: <SiGooglecloud className="cert-logo-icon gcp-icon" />,
    aws: <FaAws className="cert-logo-icon aws-icon" />,
    security: <FaShieldAlt className="cert-logo-icon security-icon" />,
    redhat: <FaCertificate className="cert-logo-icon security-icon" />,
  };

  return (
    <section className="card certs">
      <h3>
        <FaCertificate className="section-icon" />
        Certifications
      </h3>

      <div className="cert-table">
        {certifications.map((cert, index) => (
          <div className="cert-row" key={index}>
            {certIcons[cert.icon]}

            <p>{cert.name}</p>

            <span>{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}