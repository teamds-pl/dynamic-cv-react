import { observable, decorate } from "mobx"
import { auth, firestore } from '../firebase';
import { credentials } from "../environment";

class UserStore {
    usersRef;
    user;

    constructor() {
        auth.signInWithEmailAndPassword(credentials.login, credentials.password).then((authUser) => {
            this.userRef = firestore.collection('users').doc(authUser.uid).onSnapshot((snapshot) => {
                this.user = snapshot.data();
            });
        })
            .catch(error => {
                console.log('error', error);
            });
    }
}

decorate(UserStore, {
    user: observable
})

export default new UserStore();