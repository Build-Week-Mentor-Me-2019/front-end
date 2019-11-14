import axios from "axios";

export const LOADING = "LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const ERROR = "ERROR";
export const NEW_USER_SUCCESS = "NEW_USER_SUCCESS";
// export const UPDATE_USER = 'UPDATE_USER';
// export const DELETE_USER = 'DELETE_USER';
// export const LOGIN_START = 'LOGIN_START';
//
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (creds, props) => dispatch => {
  dispatch({ type: LOADING });
  return setTimeout(() => {
    axios
      .post("https://jesse-tingle-mentor-me.herokuapp.com/api/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);

        dispatch({
          type: LOGIN_SUCCESS
        });
        props.history.push("/questions");
      })
      .catch(err => console.log(err.response));
  }, 2000);
};

export const register = (creds, props) => dispatch => {
  dispatch({ type: LOADING });
  return setTimeout(() => {
    return axios
      .post("https://jesse-tingle-mentor-me.herokuapp.com/api/register/user", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: NEW_USER_SUCCESS
        });
        props.history.push("/");
      })
      .catch(err => console.log(err.response));
  }, 2000);
};
