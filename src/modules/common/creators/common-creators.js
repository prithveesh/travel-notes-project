import firebase from 'firebase';
import { CHANGE_HEADING, ADD_USER, GOOGLE_LOGIN } from '../actions/common-actions';

export function changeHeading(data) {
    return {
        type: CHANGE_HEADING,
        payload: data
    }
}

// export function doGoogleLogin() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     return {
//         type: GOOGLE_LOGIN,
//         payload: firebase.auth().signInWithPopup(provider)
//     }
// }

export function doGoogleLogin() {
    return {
        type: GOOGLE_LOGIN
    }
}

export function addUser(data) {
    return {
        type: ADD_USER,
        payload: data
    }
}