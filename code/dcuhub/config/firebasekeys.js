
import firebase from "firebase"

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDyd6iOBiCzkv-5JM-nyu0EiVdUR0rSuao",
    authDomain: "dcuhub1.firebaseapp.com",
    databaseURL: "https://dcuhub1-default-rtdb.firebaseio.com",
    projectId: "dcuhub1",
    storageBucket: "dcuhub1.appspot.com",
    messagingSenderId: "538464358825",
    appId: "1:538464358825:web:b76f95750d9af8dfc474b8",
    measurementId: "G-FXJVLVKJDN"
}

console.log('Connected with Firebase')
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp