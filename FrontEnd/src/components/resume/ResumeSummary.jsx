import React from "react";
import { FaUser } from "react-icons/fa";

export default function ResumeSummary({ summary }) {
  return (
    <section className="card summary">
      <h3>
        <FaUser className="section-icon" />
        Professional Summary
      </h3>

      <p>{summary}</p>
    </section>
  );
}