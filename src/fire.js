import firebase from 'firebase';
  
var config = {
    apiKey: "AIzaSyCmctXYeulkwqjvTQ4KqP6E4HfO5xNnNlM",
    authDomain: "offis-c5c89.firebaseapp.com",
    databaseURL: "https://offis-c5c89.firebaseio.com",
    projectId: "offis-c5c89",
    storageBucket: "offis-c5c89.appspot.com",
    messagingSenderId: "296598222800"
};

firebase.initializeApp(config);
export const ref = firebase.database().ref();
export const auth = firebase.auth;
export const provider = new firebase.auth.GoogleAuthProvider();
export const provider_fb = new firebase.auth.FacebookAuthProvider();
export const provider_twitter = new firebase.auth.TwitterAuthProvider();
