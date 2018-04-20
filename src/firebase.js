import firebase from 'firebase'
import { environment } from "./environment";
firebase.initializeApp(environment.firebase);
export default firebase;