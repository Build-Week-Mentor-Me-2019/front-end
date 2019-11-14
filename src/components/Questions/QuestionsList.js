import React from 'react';

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
    return (
        <div>
            <h1>Questions List Component</h1>
        </div>
    )
}
