import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp({
        apiKey: "AIzaSyBebIYcRECXkdfl8Oin0LxOrOnrfU4VwM4",
        authDomain: "chat-react-94734.firebaseapp.com",
        projectId: "chat-react-94734",
        storageBucket: "chat-react-94734.appspot.com",
        messagingSenderId: "807656051575",
        appId: "1:807656051575:web:fed343c0d795ea8441c772",
        measurementId: "G-179GT8Q0D6"
    });

   export const Context = createContext(null)

    const auth = firebase.auth()
    const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
