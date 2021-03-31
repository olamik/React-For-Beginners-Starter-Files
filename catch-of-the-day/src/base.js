import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXEKWucp_Wu9A26tEOcmFjXj4d07523uc",
    authDomain: "catch-of-the-day-24f6c.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-24f6c-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;