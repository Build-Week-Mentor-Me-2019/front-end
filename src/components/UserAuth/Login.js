import React, { useState } from 'react'
import api from '../utils/api';

import { login } from '../../actions/userActions';
import { connect } from 'react-redux';

function Login(props) {
    console.log('login props', props)

    const [err, setErr] = useState('')

    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.login(data)
        props.history.push('/questions')
        setTimeout(function(){
            window.location.reload()
        }, 2500)
        console.log('props.history', props.history)
    }

    return (
        <form onSubmit={handleSubmit}>
            
            {err && <div className="err">{err}</div>}

            <input type="text" name="username" placeholder="username" value={data.username} onChange={handleChange} />
            <input type="text" name="password" placeholder="password" value={data.password} onChange={handleChange} />
            <button type="submit">Log In</button>
        </form>
    )
}

export default connect(null, {login})(Login);