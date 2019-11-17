import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions/postActions';

/*
Step 1) Create a form to submit a new answer to a question
*/

class AnswerForm extends Component {

    componentWillMount() {
        this.props.fetchPosts()
    }
     
    render(){
        return (
        // <form>
        //     <textarea name="answer"   />
        //     <br />
        //     <button type="submit">Submit</button>
        // </form>

        <div>

        </div>
    )
    }
    
}

export default connect(null, {fetchPosts})(AnswerForm);