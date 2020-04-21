import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { changeHeading, doGoogleLogin } from './modules/common/creators/common-creators';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const { commonHeading, changeHeadingProps, user, doGoogleLoginProps, users } = props;

  const toggleHeading = useCallback(() => {
    changeHeadingProps(`New Header ${Math.random()}`);
  }, [changeHeadingProps]);

  // const loginUser = useCallback(() => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(provider).then((result) => {
  //     const user = result.user;
  //     const db = firebase.firestore();
  //     db.collection('userInfo').add({
  //       displayName: user.displayName,
  //       email: user.email,
  //       photoUrl: user.photoURL
  //     });
  //     setTimeout(() => {
  //       db.collection('userInfo').get().then(snapshot => {
  //         snapshot.forEach(snap => {
  //           console.log(snap.data());
  //         })
  //       })
  //     }, 2000);
  //   })
  // }, []);

  const loginUser = useCallback(() => {
    doGoogleLoginProps();
  }, [doGoogleLoginProps]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {commonHeading}
          <p>{user}</p>
          {users && (<p>user in the db: {users.length}</p>)}
        </a>
        <button onClick={toggleHeading} >Toggle Heading</button>
        <button onClick={loginUser} >Toggle User</button>
      </header>
    </div>
  );
}

function mapYourStoreStateToComponentProps(state) {
  // mapStateToProps
  return {
    commonHeading: state.$common.heading,
    user: state.$common.user,
    users: state.$common.users,
  }
}

const connected = connect(
  mapYourStoreStateToComponentProps,
  {
    changeHeadingProps: changeHeading,
    doGoogleLoginProps: doGoogleLogin,
  }
);

export default connected(App);


/* 
A - B - D - connect(E) - F
  - C - connect(H) - I

*/