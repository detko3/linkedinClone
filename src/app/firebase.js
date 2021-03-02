import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0xMvcWEO_ye6mE7yw8UNaH7wT2CchBNA",
  authDomain: "linkedin-clone-c0caa.firebaseapp.com",
  projectId: "linkedin-clone-c0caa",
  storageBucket: "linkedin-clone-c0caa.appspot.com",
  messagingSenderId: "613315136674",
  appId: "1:613315136674:web:d0bacd4418ffb7807b1bfb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
