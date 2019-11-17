import React, { useState, useEffect } from "react";
import api from "../utils/api";
/*

axios and api is already set up with an api function
instead of importing axios you will just use

api()
    .get('/api/answers/')
    .then('')
    .catch('')




step 1) Match question with answer
step 2) Display answer in component below
step 3) render Answer component below question in QuestionsList.js

*/

import Answer from "./Answer";

export default function AnswerList(props) {

  const [answers, setAnswers] = useState([]);
  const [questionID] = useState(props.questionid)
  console.log('question id from props set to state', questionID)

  useEffect(() => {
    api()
      .get(`/api/answers`)
      .then(res => {
        console.log("answer console.log", res.data);
        setAnswers(res.data);
      })
      .catch(err => {
        console.log("Error, data was not returned from server", err);
      });
  }, []);

  return (
    <section className="answers">
      <div>
        {answers.map(item => {
          {if(questionID == item.question_id) {
              return ( <Answer key={item.id} answer={item.answer} question_id={item.question_id} bus_owner_username={item.bus_owner_username} /> )
          } else return null
        }
        })}
      </div>
    </section>
  );
}