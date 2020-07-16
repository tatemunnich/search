const firebase = require('firebase/app');
// Required for side-effects
require('firebase/firestore');
// configuration object
let firebaseConfig = {
    apiKey: "AIzaSyAUfGJoDZ6qMGFXGETFtZ0DWJN58E3z6RI",
    authDomain: "applookup-e68f2.firebaseapp.com",
    databaseURL: "https://applookup-e68f2.firebaseio.com",
    projectId: "applookup-e68f2",
    storageBucket: "applookup-e68f2.appspot.com",
    messagingSenderId: "495088581657",
    appId: "1:495088581657:web:5e27d66e4a61733cf5fe88",
    measurementId: "G-ZJ5BHWLFJZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Global database const - gives you access to cloud firestore
export const database = firebase.firestore();
