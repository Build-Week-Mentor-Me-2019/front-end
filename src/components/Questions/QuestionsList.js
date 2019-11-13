import React from 'react';

/* 
axios and api is already set up with an api function 
instead of importing axios you will just use 

api()
    .get('')
    .then('')
    .catch('') 

*/
import api from '../utils/api';



export default function QuestionsList() {
    return (
        <div>
            <h1>Questions List Component</h1>
        </div>
    )
}
