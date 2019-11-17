import React, { useState } from 'react';



export default function QuestionForm(props) {

    //const [  ,  ]=useState();





    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                name="title"
            //value={}
            />
            <label htmlFor="question">Question:</label>
            <textarea
                name="question"
            //value={}
            />
            <label htmlFor="business_type">Business Type: </label>
               <input 
               type="text"
               name="business_type"
               />

            {/* <label htmlFor="file">Upload a file:  <input type="file" name="myFile">
                </input>
                </label> */}
            <button type="submit">Post Question</button>
      </form>
                )
}