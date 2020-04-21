import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase/app';
import './index.css';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: "AIzaSyBSFdxL6Wgv-hi3kYThucmflsniqjwTPFw",
  authDomain: "travel-notes-c57a8.firebaseapp.com",
  databaseURL: "https://travel-notes-c57a8.firebaseio.com",
  projectId: "travel-notes-c57a8",
  storageBucket: "travel-notes-c57a8.appspot.com",
  messagingSenderId: "833861059790",
  appId: "1:833861059790:web:a16df053342f5bb0183c9f",
  measurementId: "G-5DGFWG48RQ"
};

initializeApp(firebaseConfig);

/* 

- Render initial
- Provider - which is used to connect redux to our react application
- In this provider - passing the store 

*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
