import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "",
	authDomain: "",
	databaseURL: ""
});

const base = Rebase.createClass(fiirebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;