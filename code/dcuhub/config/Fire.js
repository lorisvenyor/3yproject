import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyd6iOBiCzkv-5JM-nyu0EiVdUR0rSuao",
    authDomain: "dcuhub1.firebaseapp.com",
    databaseURL: "https://dcuhub1-default-rtdb.firebaseio.com",
    projectId: "dcuhub1",
    storageBucket: "dcuhub1.appspot.com",
    messagingSenderId: "538464358825",
    appId: "1:538464358825:web:b76f95750d9af8dfc474b8",
    measurementId: "G-FXJVLVKJDN"
};

class Fire {
    constructor(callback) {
        this.init(callback);
    }

    init(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user);
            } 
        });
    }

    getLists(callback) {
        let ref = this.ref.orderBy("name");

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = [];

            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() });
            });

            callback(lists);
        });
    }

    addList(list) {
        let ref = this.ref;

        ref.add(list);
    }

    deleteList(list){
        let ref = this.ref;
        ref.doc(list.id).delete()
    }

    updateList(list) {
        let ref = this.ref;

        ref.doc(list.id).update(list);
    }

    get userId() {
        return firebase.auth().currentUser.uid;
    }

    get ref() {
        return firebase
            .firestore()
            .collection("users")
            .doc(this.userId)
            .collection("lists");
    }

    detach() {
        this.unsubscribe();
    }
}

export default Fire;
