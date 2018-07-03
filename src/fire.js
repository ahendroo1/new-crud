import firebase from 'firebase';

    var config = {
        apiKey: "AIzaSyBQXDQhomhEQzv2YIyxJ4PYhDz7KZa9r7I",
        authDomain: "offis-c4fe2.firebaseapp.com",
        databaseURL: "https://offis-c4fe2.firebaseio.com",
        projectId: "offis-c4fe2",
        storageBucket: "offis-c4fe2.appspot.com",
        messagingSenderId: "442347833946"
    };

    var fire = firebase.initializeApp(config); 

export default fire;