import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}:</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong> {definition.definition}</strong>
              <br />

              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
