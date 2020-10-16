import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDrXJFb2CYbSwcxDABJKallRdH7KEp8D2o",
    authDomain: "logintest-e30bc.firebaseapp.com",
    databaseURL: "https://logintest-e30bc.firebaseio.com",
    projectId: "logintest-e30bc",
    storageBucket: "logintest-e30bc.appspot.com",
    messagingSenderId: "568964655539",
    appId: "1:568964655539:web:5e04f6b3a780eb2a7203c6",
    measurementId: "G-91HXPX9NT6"
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//https://www.freakyjolly.com/reactjs-sign-in-form-using-firebase-google-authentication/#.X4cCCZpS_CI