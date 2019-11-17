import React from "react"

const Answer = props => {
  return (
    <div className="answer-wrapper">
      <p>Answer: {props.answer}</p>
      <p>Business Owner Username : {props.bus_owner_username}</p>
    </div>
  )
}

export default Answer;