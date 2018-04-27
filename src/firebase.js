import firebase from 'firebase'
import 'firebase/firestore';
import { environment } from "./environment";

const app = firebase.initializeApp(environment.firebase);
const auth = app.auth();
const firestore = app.firestore();

export {
    firebase,
    auth,
    firestore
};
