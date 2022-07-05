// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

console.log(firebase);

const firebaseConfig = {
  apiKey: "AIzaSyCw27sAP2PKnUzWviC6bqODYRmcDlVnSUM",
  authDomain: "slack-app-be5b8.firebaseapp.com",
  projectId: "slack-app-be5b8",
  storageBucket: "slack-app-be5b8.appspot.com",
  messagingSenderId: "374071605809",
  appId: "1:374071605809:web:4ef1898a3118e68ca5f310",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
