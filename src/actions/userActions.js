import axios from 'axios';

export const LOADING = 
// export const ADD_NEW_USER = 'ADD_NEW_USER';

// export const UPDATE_USER = 'UPDATE_USER';

// export const DELETE_USER = 'DELETE_USER';

// export const LOGIN_START = 'LOGIN_START';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START})
    return axios
                .post('https://jesse-tingle-mentor-me.herokuapp.com/api/login', creds)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    dispatch({
                        type: LOGIN_SUCCESS
                    })
                })
                .catch(err => console.log(err.response))
}

export const addNewUser = (item) => {
    return {
        type: ADD_NEW_USER,
        payload: item
    }
}