import { CHANGE_HEADING, ADD_USER } from '../actions/common-actions';

const initialState = {
    heading: 'Travel Notes',
    user: 'I am user'
}

export default function(state = initialState, action) {
    // Modify State here

    switch(action.type) {
        case CHANGE_HEADING:
            return {
                ...state,
                heading: action.data
            }
        case ADD_USER:
            return {
                ...state,
                user: action.data
            }
        default:
    }
    return state;
}