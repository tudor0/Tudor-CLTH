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
console.log("meow", firestore.collection("users"));
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  return userRef;
};
export default firebase;