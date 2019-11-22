// Styles for Answer.js, AnswerForm.js, AnswerList.js
import styled from 'styled-components'



// styles for AnswerForm.js
 
export const AnswerWrapper = styled.div`
margin: 40px;
padding: 10px;
`;

export const SubmitButton = styled.button`
width: 140px;
padding: 10px;
margin: 5px;
border: none;
border-radius: 12px;
font-size: 20px;
font-weight: bold;
background: #fafdcb;
border: none;
`;

//Styles for Answer.js

export const AnswerContainer = styled.div`
margin-left: 50px;
font-size: 1.5rem;
background: white;
border-radius: 5px;
display: flex;
flex-direction: column;
margin-bottom: 20px;
font-family: 'PT Sans Narrow', sans-serif;

p {
margin: 10px;
padding: 10px;
}
`;
