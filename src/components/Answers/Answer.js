import React, { useState, useEffect } from "react"
import api from "../utils/api"
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

export default function Answer(props) {
  // Here I am setting a slice of state for the id value that I will get from my API call, and another slice for the questionId, which I expect to recieve on props. (Awaiting prop from Whitney)
  // I am then using the hook a third time to create a slice for the answer, which will come from somewhere. (AnswerList? QuestionList?)
  const [identifier, setIdentifier] = useState("")
  const [questionId, setQuestionId] = useState("")
  const [answer, setAnswer] = useState("")

  // Making my API call...
  setQuestionId(props.questionid)
  useEffect(() => {
    api()
      .get(`/api/answers`)
      .then(res => {
        setIdentifier(res.data.id)
        if (identifier === questionId) setAnswer(res.data.answer)
      })
      .catch(err => {
        console.log("Error, data was not returned from server", err)
      })
  }, [identifier, questionId])
  //  Syncing state with my async API call...

  return (
    <section className="answers">
      <div>
        {/* Displaying data here */}
        <p>Here is the answer to your question: {answer}</p>
      </div>
    </section>
  )
}
