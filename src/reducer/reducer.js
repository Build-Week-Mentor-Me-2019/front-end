import { ADD_NEW_USER } from '../actions/userActions';

const initialState = {
    username: '',
    name: '',
    bio: '',
    avatar: '',
    owner: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_USER:
            return {
                ...state,

            }
        default:
            return state;
    }
}