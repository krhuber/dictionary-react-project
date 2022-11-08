import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span className="text">{props.phonetics.text}</span>

      <button>
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noreferrer noopener"
        >
          Listen
        </a>
      </button>
    </div>
  );
}
