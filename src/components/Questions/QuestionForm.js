import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
//import axios from 'axios';

function QuestionForm({ values, touched, errors }) {
    return (
        <Form>
            <Field type="text" name="title" placeholder="Title" value={values.title} />

            {touched.title && errors.title && <p>{errors.title}</p>}

            <Field component="textarea" name="question" value={values.question} />

            {touched.question && errors.question && <p>{errors.question}</p>}

            <Field name="business_type" placeholder="Business Type" value={values.business_type} />

            {touched.business_type && errors.business_type && <p>{errors.business_type}</p>}

            <button type="submit">Post Question</button>
        </Form>
    );
}

const FormikQuestionForm = withFormik({
    mapPropsToValues({ title, question, business_type }) {
        return {
            title: title || "",
            question: question || "",
            business_type: business_type || ""
        };
    },

    //the validation schema//

    validationSchema: Yup.object().shape({
        title: Yup.string().required("You need a title."),
        question: Yup.string(),
        business_type: Yup.string().required("Enter type of business.")

    }),

    //POST request//

    // handleSubmit(values) {
    //     axios
    //      .post(""), values)
    //      .then(respond => {
    //      console.log(respond);
    // })
    //      .catch(error => {
    //      console.log("Error", error);
    // });

    // })
    //     }
})(QuestionForm);

export default FormikQuestionForm;
