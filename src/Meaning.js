import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}:</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition: </strong>
            {definition.definition}
            <br />
            <Example example={definition.example} />
            <br />
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
