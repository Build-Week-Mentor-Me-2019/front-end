import React, { useState, useEffect } from "react";

/* 
axios and api is already set up with an api function 
instead of importing axios you will just use 

api()
    .get('/api/questions/:id')
    .then('')
    .catch('') 


step 1) Map over the array of questions and render them to the screen

step 2) Create Answers component

*/

import api from "../utils/api";
import Question from "./Question";

// title: '',
// question: '',
// business_type: '',
// photo: '',
// entrepreneur_username: ''

export default function QuestionsList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    api()
      .get(`/api/questions`)
      .then(res => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch(err => {
        console.log("Questions Error", err);
      });
  }, []);

  return (
    <div>
      {questions.map(item => {
        return (
          <Question
            key={item.id}
            questionid={item.id}
            title={item.title}
            question={item.question}
            business={item.business_type}
            entrepreneur={item.entrepreneur_username}
          />
        );
      })}
    </div>
  );
}