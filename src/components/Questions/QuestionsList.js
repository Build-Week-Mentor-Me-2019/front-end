import React, { useState, useEffect } from 'react';
import Question from './Question';

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

import api from '../utils/api';


export default function QuestionsList() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        api()
            .get(`/api/questions`)
            .then(response => {
                const quest = response.data;
                console.log(response.data)
                //nothing is returned when I console.log//
                setQuestions(quest);
            })
            .catch(error => {
                console.log("questions not displayed", error);
            });
    }, []);

    return (
        <div>
            {/* <h1>Questions List Component</h1> */}

            {questions.map(entry => {
                return (
                    <Question key={entry.id}
                        questionid={entry.id}
                        title={entry.title}
                        question={entry.question}
                        business={entry.business_type}
                        //img={entry.photo} stretch goal//
                        e_username={entry.entrepreneur_username}
                        />
                        );
                    })}
        </div>
    );
}