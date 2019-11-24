// Styles for Question.js, QuestionsList.js, QuestionForm.js

import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  padding: 2rem;
`;

export const QuestionBar = styled.div`
  background: #28c3d4;
  box-shadow: 2px 10px 16px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: justify;
  padding: 3.5rem;
  font-size: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  h1 {
    font-size: 2.5rem;
    text-shadow: 2px 2px 2px #000000;
    background: #fafdcb;
    width: 100%;
    text-align: center;
    padding: 0.7rem;
  }

  p {
    font-size: 22px;
  }
`;

export const Username = styled.p`
font-style: italic;
font-size: 22px;
`;

export const Quest = styled.div`
border: 3px solid #000000;
border-radius: 10px;
padding: 1rem
background: lightgrey;
`;

