import React from 'react';
// Style files
import { AnswerSection } from '../../styles/answersStyles';
import { Username } from '../../styles/questionsStyles';

const Answer = props => {
  return (
      <AnswerSection>
      <p>A: {props.answer}</p>
      <Username>Business Owner Username : {props.bus_owner_username}</Username>
    </AnswerSection>
  );
};

export default Answer;
