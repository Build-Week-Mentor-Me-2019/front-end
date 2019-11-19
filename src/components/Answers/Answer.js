import React from "react"

// Style files
import answerStyles from '../../styles/answersStyles';

const Answer = props => {
  return (
    <div className="answer-wrapper">
      <p>A: {props.answer}</p>
      <p>Business Owner Username : {props.bus_owner_username}</p>
    </div>
  )
}

export default Answer;