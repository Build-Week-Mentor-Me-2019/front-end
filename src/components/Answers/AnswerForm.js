import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions/postActions';

/*
Step 1) Create a form to submit a new answer to a question
*/

function AnswerForm(props) {

    // componentWillMount() {
    //     this.props.fetchPosts()
    // }

    useEffect(() => {
        props.fetchPosts()
    }, [])
     
        return (
        // <form>
        //     <textarea name="answer"   />
        //     <br />
        //     <button type="submit">Submit</button>
        // </form>

        <div>
            {console.log('answer form console.log testing', props.posts)}
        </div>
    )
    
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(AnswerForm);