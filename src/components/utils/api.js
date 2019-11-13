import axios from 'axios';

export default function() {
    return axios.create({
        baseURL: 'https://jesse-tingle-mentor-me.herokuapp.com/',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}