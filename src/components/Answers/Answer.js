import React from "react"

// Style files
//import answersStyles from '../../styles/answersStyles';
import { AnswerContainer } from '../../styles/answersStyles';

const Answer = props => {
  return (
    
    <AnswerContainer className="answer-wrapper">
      <p>A: {props.answer}</p>
      <p>Business Owner Username : {props.bus_owner_username}</p>
    </AnswerContainer>
  
  )
}

export default Answer;