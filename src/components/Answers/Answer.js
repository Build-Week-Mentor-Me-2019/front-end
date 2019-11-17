import React from "react";

export default function Answer(props) {

    console.log('answer props', props)
  return (
    <div className="answer-block">
      <p>Answer: {props.answer}</p>
      <p>Business Owner Username: {props.bus_owner_username}</p>
    </div>
  );
}