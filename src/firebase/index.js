import * as firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDQJmyedNCSmEJNNPT2HGZiBQj5-kty6G4",
    authDomain: "techshop-coder.firebaseapp.com",
    projectId: "techshop-coder",
    storageBucket: "techshop-coder.appspot.com",
    messagingSenderId: "377510029159",
    appId: "1:377510029159:web:58f72279d36e822c16f1c2"
})

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}