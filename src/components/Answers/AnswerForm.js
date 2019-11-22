import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postAnswer } from '../../redux/actions/postActions';
import { withFormik, Form, Field } from 'formik';

import axios from 'axios';

// Style files
import { AnswerWrapper } from '../../styles/answersStyles';
import { SubmitButton } from '../../styles/answersStyles';

/*
Step 1) Create a form to submit a new answer to a question
*/

const AnswerForm = ({ values, touched, errors }) => {
  console.log(values);
  const [newAnswer, setNewAnswer] = useState({
    answer: ''
    // question_id: props.questionid,
    // bus_owner_username: '',
  });
  // componentWillMount() {
  //     this.props.fetchPosts()
  // }

  // useEffect(() => {
  //     props.postAnswer()
  // }, [])

  // const handleChange = (e) => {
  //     setNewAnswer({
  //         ...newAnswer,
  //         [e.target.name]: e.target.value
  //     })
  // }

  // const handleSubmit = (e) => {
  //     e.preventDefault()

  //     api()
  //     .post('/api/answers')
  //     .then(res => {
  //         console.log('post answer', res)
  //         // setNewAnswer(res)
  //     })
  //     .catch(err => {
  //         console.log(err)
  //     })

  // }

  return (
    <AnswerWrapper>
      <Form className='answer-form' onSubmit={handleSubmit}>
        <Field type='textarea' name='answer' placeholder='Answer' value={values.answer} />
        {touched.answer && errors.answer && <p>{errors.answer}</p>}
        <br />
        <Field type='text' name='question_id' placeholder='Question ID' value={values.question_id} />
        {touched.question_id}
        <br />
        <Field type='text' name='bus_owner_username' placeholder='Business Owner Username' value={values.bus_owner_username} />
        {touched.bus_owner_username && errors.bus_owner_username && <p>{errors.bus_owner_username}</p>}
        <br />
        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>
    </AnswerWrapper>
  );
};

const FormikAnswerForm = withFormik({
  mapPropsToValues({ answer, question_id, bus_owner_username }) {
    return {
      answer: answer || '',
      question_id: question_id || '',
      bus_owner_username: bus_owner_username || ''
    };
  },

  validationSchema: Yup.object().shape({
    answer: Yup.string().required('Please enter your answer.'),
    question_id: Yup.string(),
    bus_owner_username: Yup.string().required('Please enter your name.')
  }),

  handleSubmit(values) {
    axios
      .post(`api/answers`, values)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(AnswerForm);

// const mapStateToProps = state => ({
//     posts: state.posts.items
// })

// export default connect(mapStateToProps, {postAnswer})(AnswerForm);
export default FormikAnswerForm;
