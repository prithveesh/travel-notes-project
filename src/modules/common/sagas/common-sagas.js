import firebase from 'firebase';
import { GOOGLE_LOGIN } from '../actions/common-actions';
import { takeLatest, all, call, put } from 'redux-saga/effects';

function* getAllUsers() {
    const db = firebase.firestore();
    const snapshot = yield db.collection('userInfo').get();
    const users = [];
    snapshot.forEach(snap => users.push(snap.data()));
    
    yield put({
        type: 'GET_ALL_USERS',
        payload: users
    });
}

function* storeUserData(data) {
    console.log("data from saga", data);
    const { user } = data;
    const db = firebase.firestore();
    yield db.collection('userInfo').add({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
    });

    yield put({
        type: 'SAVED_USER',
        payload: user
    });
    yield call(getAllUsers);
}

function* doGoogleLogin(data) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = yield firebase.auth().signInWithPopup(provider);
    yield call(storeUserData, result);
}

export default function* rootSaga() {
    // takeEvery, takeLatest

    // when you have 1 saga only
    // yield takeLatest(GOOGLE_LOGIN + '_FULFILLED', storeUserData);

    // when you have multiple sagas
    yield all([
        takeLatest(GOOGLE_LOGIN, doGoogleLogin),
        takeLatest(GOOGLE_LOGIN + '_FULFILLED', storeUserData)
    ]);
}

/*

from our app
- dispatch an action which initiate google login popup
- we entered our creator
    - returned an object which has a type (action type) and a payload
- Now we enter the sagas
    - the store will go over to all the takeLatest which we have written in the default rootSaga function and it will try to match the action type.
    - 

*/


/*

- on the start of the application
Read all the users from the database and display their names and photos in a list on the ui

*/