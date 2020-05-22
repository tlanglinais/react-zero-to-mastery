import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOFGnXnbdOqD-S93VacSsiBvqDMgR0ENQ",
  authDomain: "crown-db-e1428.firebaseapp.com",
  databaseURL: "https://crown-db-e1428.firebaseio.com",
  projectId: "crown-db-e1428",
  storageBucket: "crown-db-e1428.appspot.com",
  messagingSenderId: "163111125178",
  appId: "1:163111125178:web:0938a644bb4d20da958283",
  measurementId: "G-JHGV5Z0LW5",
};

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
      console.log("error creating user", error.message);
    }

    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
