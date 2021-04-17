import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAEuFVMIDSz4cFxM90Rc__ElPsxOCoc-tk",
    authDomain: "todoapp-bd55a.firebaseapp.com",
    projectId: "todoapp-bd55a",
    storageBucket: "todoapp-bd55a.appspot.com",
    messagingSenderId: "770098162873",
    appId: "1:770098162873:web:5d2b8a999505c06c967f68"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export{ db };