import axios from 'axios';

export default function() {
    return axios.create({
        baseURL: 'https://kefi-mentor-me.herokuapp.com',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}