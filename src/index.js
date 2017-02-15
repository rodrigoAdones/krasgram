import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import App from './App';
import './index.css';

firebase.initializeApp({
    apiKey: "AIzaSyA4tpG_mP8fmPc5ImS1jfpjJm6lBlCQcEw",
    authDomain: "krasgram.firebaseapp.com",
    databaseURL: "https://krasgram.firebaseio.com",
    storageBucket: "krasgram.appspot.com",
    messagingSenderId: "402613122942"
  });

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
