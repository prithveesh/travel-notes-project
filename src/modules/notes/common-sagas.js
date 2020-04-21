import firebase from 'firebase';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CHANGE_HEADING, ADD_USER, ALL_USERS, USER_ADDED, GOOGLE_LOGIN, CHANGE_HEADING_DONE } from '../actions/common-actions';

function* changeHeading(data) {
    console.log(data)
    yield put({
        type: CHANGE_HEADING_DONE,
        payload: data.payload
    });
}

function* storeUser(data) {
    const user = data;
    const db = firebase.firestore();
    yield db.collection('userInfo').add({
      displayName: user.displayName,
      email: user.email,
      photoUrl: user.photoURL
    });
    yield put({
        type: USER_ADDED
    })
}

function* getAllUsers() {
    const db = firebase.firestore();
    const snapshot = yield db.collection('userInfo').get();
    const users = []
    snapshot.forEach(snap => users.push(snap.data()));
    yield put({
        type: ALL_USERS,
        payload: users
    });
}

function* doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const payload = yield firebase.auth().signInWithPopup(provider);
    yield call(storeUser, payload.user);
    const users = yield call(getAllUsers);
    yield put({
        type: GOOGLE_LOGIN + "_SUCCESS",
        payload: users
    });

}

function* addUser(data) {
    yield put({
        type: ADD_USER,
        payload: data.payload
    });
}

const sagas = [
    takeLatest(CHANGE_HEADING, changeHeading),
    takeLatest(GOOGLE_LOGIN, doGoogleLogin),
    takeLatest(ADD_USER, addUser),
]

export default function* rootSaga() {
    yield all(sagas)
}