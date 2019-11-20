import React from "react"


// Style files
//import answersStyles from '../../styles/answersStyles';
import { AnswerSection } from '../../styles/answersStyles';

const Answer = props => {
  return (
    
    <AnswerSection className="answer-wrapper">
      <p>A: {props.answer}</p>
      <p>Business Owner Username : {props.bus_owner_username}</p>
    </AnswerSection>
  
  )
}

export default Answer;