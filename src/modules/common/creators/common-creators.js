import { CHANGE_HEADING, ADD_USER } from '../actions/common-actions';

export function changeHeading(data) {
    return {
        type: CHANGE_HEADING,
        data
    }
}

export function addUser(data) {
    return {
        type: ADD_USER,
        data
    }
}