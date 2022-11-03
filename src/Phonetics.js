import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      {props.phonetics.text}
      <br />
      <br />
      <ReactAudioPlayer src={props.phonetics.audio} controls onplay />
    </div>
  );
}
