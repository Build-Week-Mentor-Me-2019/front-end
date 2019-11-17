import React from 'react';

const Question = props => {

    return (
        <div className="question-bar">
            {/* <img
                className="entrepreneur-avatar"
                src={props.img}
                alt="e-avatar"
                /> */}
            <h3>{props.username}</h3>
            
            <h1>{props.title}</h1>
            <h2>Q: {props.question}</h2>
            <p>Business: {props.business}</p>
        </div>
    )
}
export default Question;