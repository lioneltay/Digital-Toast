const firebase = require("firebase/app")
require("firebase/firestore")
require("firebase/auth")

firebase.initializeApp({
  apiKey: "AIzaSyCRI1IHpqlFiEuYXad3N3L-biAKEtD9Q40",
  authDomain: "digital-toast-staging.firebaseapp.com",
  databaseURL: "https://digital-toast-staging.firebaseio.com",
  projectId: "digital-toast-staging",
  storageBucket: "digital-toast-staging.appspot.com",
  messagingSenderId: "723162197166",
  appId: "1:723162197166:web:5b1fd4d7547214c6dd513f",
  measurementId: "G-KQ9P582Q74",
})

const firestore = firebase.firestore()
const auth = firebase.auth()
