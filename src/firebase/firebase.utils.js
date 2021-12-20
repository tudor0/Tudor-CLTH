import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAOJF9yufNHC-bAVKgW3IItCLLDxPJ1u6Q",
  authDomain: "tudor-clth.firebaseapp.com",
  projectId: "tudor-clth",
  storageBucket: "tudor-clth.appspot.com",
  messagingSenderId: "158457805449",
  appId: "1:158457805449:web:21e6684cfeacbd70bae458",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
