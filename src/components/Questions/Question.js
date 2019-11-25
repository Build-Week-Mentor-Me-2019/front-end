import React from 'react';
import AnswerList from '../Answers/AnswerList';
import FormikAnswerForm from '../Answers/AnswerForm';
import { QuestionBar } from '../../styles/questionsStyles';
import { QuestionWrapper } from '../../styles/questionsStyles';
import { Username } from '../../styles/questionsStyles'
import { Quest } from '../../styles/questionsStyles';

const Question = props => {
  return (
    <QuestionWrapper>
      <QuestionBar key={props.id}>
        <h1>{props.title}</h1>
        <Quest>
          <h2>Q: {props.question}</h2>
          <p>Business Type: {props.business}</p>
          <Username>Entrepreneur Username: {props.e_username}</Username>
        </Quest>
        {/* Hutch the variable name you will need for the Answer List component is questionid={props.questionid} */}
        <AnswerList question_id={props.questionid} />
        <FormikAnswerForm question_id={props.questionid} />
      </QuestionBar>
    </QuestionWrapper>
  );
};
export default Question;
