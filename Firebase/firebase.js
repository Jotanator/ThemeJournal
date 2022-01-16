// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { auth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCIa89If7uVvTbZd0iPoJ4j0jgXVJ985SM",

  authDomain: "themejournal-6b808.firebaseapp.com",

  projectId: "themejournal-6b808",

  storageBucket: "themejournal-6b808.appspot.com",

  messagingSenderId: "572082136572",

  appId: "1:572082136572:web:79b4a571d9624d6f4c3e79"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

export {auth}