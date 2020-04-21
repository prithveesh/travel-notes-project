import { CHANGE_HEADING, ADD_USER, GOOGLE_LOGIN, CHANGE_HEADING_DONE } from '../actions/common-actions';

const initialState = {
    heading: 'Travel Notes',
    user: 'I am user'
}

export default function(state = initialState, action) {
    // Modify State here

    switch(action.type) {
        case CHANGE_HEADING_DONE:
            return {
                ...state,
                heading: action.payload + 'Done'
            }
        case CHANGE_HEADING:
            return {
                ...state,
                heading: action.payload
            }
        case GOOGLE_LOGIN + '_PENDING':
            console.log('pending');
            break;
        case GOOGLE_LOGIN + '_REJECTED':
            console.log('rejected')
            break;
        case GOOGLE_LOGIN + '_FULFILLED':
            console.log(action.payload);
            break;
        case 'SAVED_USER':
            return {
                ...state,
                user: action.payload.displayName
            }
        case 'GET_ALL_USERS':
            return {
                ...state,
                users: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
    }
    return state;
}