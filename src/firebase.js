// import firebase from "firebase";    
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuBfD0hDL0XOAHlMFpVa-Z0kOkMj0BgGw",
    authDomain: "linkedin-clone-yt-6c800.firebaseapp.com",
    projectId: "linkedin-clone-yt-6c800",
    storageBucket: "linkedin-clone-yt-6c800.appspot.com",
    messagingSenderId: "497815431406",
    appId: "1:497815431406:web:5296ab0600c881cf646bff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};
// https://console.firebase.google.com/u/0/project/linkedin-clone-yt-6c800/settings/general/web:Yjk3M2MzMTUtYjk2Yi00YzcwLTk5ZjktYzg0NWFiZjQ1NTY1
//   After paste this from this link. Run this 'npm add firebase' in terminal


// Firebase allows us to build real time database authentication.