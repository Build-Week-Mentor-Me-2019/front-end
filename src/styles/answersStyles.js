// Styles for Answer.js, AnswerForm.js, AnswerList.js
import styled from 'styled-components';

// styles for AnswerForm.js

export const AnswerWrapper = styled.div`
  margin: 10px;
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

export const AnswerSection = styled.div`
  ${'' /* margin-left: 50px; */}
  font-size: 1.5rem;

  p {
    border: 2px solid #000000;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
  }
`;
