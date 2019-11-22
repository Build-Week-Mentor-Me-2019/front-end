import React, { useState } from 'react'
import api from '../utils/api';

// import { initialState, reducer } from '../../reducer/loginReducer';

import { register } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

function Signup(props) {
    // console.log('login props', props)

    const [err, setErr] = useState('')

    const [data, setData] = useState({
        username: '',
        name: '',
        password: '',
        owner: 0
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.register(data, props)
        console.log('props.history', props.history)
    }

    return (
        <form onSubmit={handleSubmit} disabled={props.loading} /* className={props.loading ? "transparent" : "regular"}*/ >

            {err && <div className="err">{err}</div>}

            <input type="text" name="username" placeholder="username" value={data.username} onChange={handleChange} />
            <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} />
            <input type="text" name="password" placeholder="password" value={data.password} onChange={handleChange} />

            <p>Are you a business owner?</p>
            <div className="radio-btns" >
                <div>
                    <input type="radio" name="owner" value="1" checked={data.owner == 1}  onChange={handleChange} />
                    <label>Yes</label>
                </div>

                <div>
                    <input type="radio" name="owner" value="0" checked={data.owner == 0} onChange={handleChange} />
                    <label>No</label>
                </div>
            </div>

            <button disabled={props.loading} type="submit">Sign Up</button>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps, {register})(Signup);