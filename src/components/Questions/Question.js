import React from "react";
import AnswerList from "../Answers/AnswerList";
import AnswerForm from '../Answers/AnswerForm';

export default function Question(props) {

    console.log('question props', props)
  return (
    <div className="question-block">
      <h1>Question Title: {props.title}</h1>
      <p>Question: {props.question}</p>
      <p>Business Type: {props.business}</p>
      <p>Entrepreneur Username: {props.entrepreneur}</p>

      <AnswerList  questionid={props.questionid} />
      <AnswerForm questionid={props.questionid} />
    </div>
  );
}