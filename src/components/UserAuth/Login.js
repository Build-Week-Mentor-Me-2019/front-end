import React, { useState } from 'react'
import api from '../utils/api';

import { Link } from 'react-router-dom'

// import { initialState, reducer } from '../../reducer/loginReducer';

import { login } from '../../actions/userActions';
import { connect } from 'react-redux';

function Login(props) {
    console.log('login props', props)

    const [err, setErr] = useState('')

    const [data, setData] = useState({
        username: 'elonmusk',
        password: 'space'
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.login(data, props)
        // setTimeout(function(){
        //     window.location.reload()
        // }, 2500)
        console.log('props.history', props.history)
    }

    return (
        <div>
        <form onSubmit={handleSubmit} disabled={props.loading} className={props.loading ? "transparent" : "regular"}>
            
            {err && <div className="err">{err}</div>}

            <input type="text" name="username" placeholder="username" value={data.username} onChange={handleChange} />
            <input type="text" name="password" placeholder="password" value={data.password} onChange={handleChange} />
            <button disabled={props.loading} type="submit">Log In</button>
        </form>

        <Link to="/signup">Sign Up</Link>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps, {login})(Login);