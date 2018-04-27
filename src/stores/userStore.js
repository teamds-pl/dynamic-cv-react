import { observable, decorate, computed } from "mobx"
import firebase from '../firebase';

class UserStore {
    users = [];
    usersRef;

    get allUsers(){
        return this.users.slice();
    }

    constructor() {
        this.usersRef = firebase.database().ref('users');

        this.usersRef.on('value', (snapshot) => {
            const users = snapshot.val();
            const newState = [];
            for (let user in users) {
              newState.push(users[user]);
            }
            this.users = newState;
        });
    }
}

decorate(UserStore, {
    users: observable,
    allUsers: computed
})

export default new UserStore();