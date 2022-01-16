// Import the functions you need from the SDKs you need

import * as firebase from "firebase";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAjabFq0vGE-aJnVhIBTOGKj3OMPOGuhGc",

  authDomain: "themejorunal.firebaseapp.com",

  projectId: "themejorunal",

  storageBucket: "themejorunal.appspot.com",

  messagingSenderId: "278498032387",

  appId: "1:278498032387:web:19db9e928e50c8142c0736",

  measurementId: "G-M7L5ZJ4GHF"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


// Initialize Firebase
// let app
// let analytics
// if(firebaseConfig.apps.length === 0) {
//     app = initializeApp(firebaseConfig);
//     analytics = getAnalytics(app);
// }else {
//   app = firebase.app()
//   analytics = getAnalytics(app);
// }

const auth = firebase.auth()

export { auth };