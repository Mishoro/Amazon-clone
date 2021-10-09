
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrqlhiab69hA-XztDhFRwMgkDguTBEdQc",
  authDomain: "frontend-a1b26.firebaseapp.com",
  projectId: "frontend-a1b26",
  storageBucket: "frontend-a1b26.appspot.com",
  messagingSenderId: "587730415971",
  appId: "1:587730415971:web:c52a81c1fb735c1dace356",
  measurementId: "G-K9F4GF7N1K"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };