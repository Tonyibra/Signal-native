import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0JvfMX9VTXskQHGZ59ymYN6fKVxPlGBU",
  authDomain: "signal-clone-ad073.firebaseapp.com",
  projectId: "signal-clone-ad073",
  storageBucket: "signal-clone-ad073.appspot.com",
  messagingSenderId: "655310031112",
  appId: "1:655310031112:web:ad3fa651c4a5c2d87d04bd",
  measurementId: "G-TRSPLE3652",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
