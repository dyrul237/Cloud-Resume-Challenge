import React from "react";
import { NavLink } from "react-router-dom";

export default function ResumeHeader(props) {
    const profile = props.profile;
    const contact = profile.contact;
    const links = profile.links;

  return (
    <div className="card">
    <div className="intro-section">
        <h1>{ profile.name }</h1>
        <h2>{ profile.title }</h2>
            <p>
            { profile.intro }
            </p>
    <div className="contact-info">
        <span>{ contact.location }</span>
        <span>{ contact.phone } </span>
        <span>
        <a href={`mailto:${contact.email}`}>
              ✉ {contact.email}
        </a>
        </span>
    </div>

{/* Contact Info */}
    <div className="Social-Buttons">
        <a href="#">Resume</a>
        <a href={links.github} target="_blank"> Github </a>
        <a href={links.linkedin} target="_blank">Linkedin</a>
    </div>
{/* Social Buttons */}
</div>
{/* intro */}
</div>
  );
};

