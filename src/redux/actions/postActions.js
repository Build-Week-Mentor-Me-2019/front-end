import { FETCH_POSTS, NEW_POST } from './types';

import api from '../../components/utils/api';

export const fetchPosts = () => dispatch => {
    console.log('fetching')
        api()
            .get('/api/answers')
            .then(res => dispatch({
                type: FETCH_POSTS,
                payload: res.data
            }))
}