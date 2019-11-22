// Styles for Question.js, QuestionsList.js, QuestionForm.js

import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
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

  h1 {
    font-size: 2.5rem;
    text-shadow: 2px 2px 2px #000000;
    background: #fafdcb;
    width: 100%;
    text-align: center;
    border: 3px solid #000000;
    padding: 0.7rem;
  }

  h2 {
    border: 3px solid #000000;
    padding: 1rem;
    border-radius: 10px;
  }

  h3 {
    text-align: center;
    margin-right: 50px;
  }

  p {
    width: 90%;
    text-align: center;
  }
`;
