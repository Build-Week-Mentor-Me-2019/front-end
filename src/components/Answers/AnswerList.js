
import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Answer from "./Answer";
/*
axios and api is already set up with an api function
instead of importing axios you will just use

api()
    .get('/api/answers/:id')
    .then('')
    .catch('')

step 1) Match question with answer
step 2) Display answer in component below
step 3) render Answer component below question in QuestionsList.js

*/

export default function AnswerList(props) {
  // Here I am setting a slice of state for the id value that I will get from my API call, and another slice for the questionId, which I expect to recieve on props. (Awaiting prop from Whitney)
  // I am then using the hook a third time to create a slice for the answer, which will come from somewhere. (AnswerList? QuestionList?)

  const [questionId] = useState(props.question_id);
  const [answers, setAnswers] = useState([]);


  // Making my API call...
  useEffect(() => {
    api()
      .get(`/api/answers`)
      .then(res => {

        setAnswers(res.data);
      })
      .catch(err => {
        console.log("Error, data was not returned from server", err);
      });
  }, []);

  //  Syncing state with my async API call...

  return (
    <section className="answers">

      {/* { answers.map(answer => {
    {if(questionId == answer.question_id) {
           return(
               <Answer
            key={answer.id}
            answer={answer.answer}
            question_id={answer.question_id}
            bus_owner_username={answer.bus_owner_username}
            />
           )
        } else return null
    }
    })} */}


      {answers.map(answer => {
        if (questionId === answer.question_id) {
          return (
            <Answer
              key={answer.id}
              answer={answer.answer}
              question_id={answer.question_id}
              bus_owner_username={answer.bus_owner_username}
            />
          );
        } else return null;
      })}
    </section>
  );
}

