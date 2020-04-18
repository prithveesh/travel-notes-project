import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { changeHeading, addUser } from './modules/common/creators/common-creators';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const { commonHeading, changeHeadingProps, changeUserProps, user } = props;

  const toggleHeading = useCallback(() => {
    changeHeadingProps(`New Header ${Math.random()}`);
  }, [changeHeadingProps]);

  const toggleUser = useCallback(() => {
    changeUserProps(`I am user number: ${Math.random()}`);
  }, [changeUserProps]);

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
        </a>
        <button onClick={toggleHeading} >Toggle Heading</button>
        <button onClick={toggleUser} >Toggle User</button>
      </header>
    </div>
  );
}

function mapYourStoreStateToComponentProps(state) {
  return {
    commonHeading: state.$common.heading,
    user: state.$common.user
  }
}

const connected = connect(
  mapYourStoreStateToComponentProps,
  {
    changeHeadingProps: changeHeading,
    changeUserProps: addUser,
  }
);

export default connected(App);


/* 
A - B - D - connect(E) - F
  - C - connect(H) - I

*/