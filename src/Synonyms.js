import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms[1]) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
