const initialState = {
    loading: false
}


export function reducer(state = initialState, action) {
    switch(action.type){
        case 'LOADING':
            return{
                ...state,
                loading: !state.loading
            }
        default:
            return state
    }
}