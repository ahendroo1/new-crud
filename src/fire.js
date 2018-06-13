import firebase from 'firebase';
var config = {
apiKey: "a1b2c3d4e5f6g7h8i9j0",
authDomain: "lintang-auth.firebaseapp.com", databaseURL: "https://lintang-auth.firebaseio.com", projectId: "lintang-auth",
storageBucket: "lintang-auth.appspot.com", messagingSenderId: "1234567890"
};
firebase.initializeApp(config);
export const ref = firebase.database().ref(); export const auth = firebase.auth;
export const provider = new firebase.auth.GoogleAuthProvider();