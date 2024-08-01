// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA5pAXC60YpcBpeTZbAwwPbqOmDKrGQmck",
    authDomain: "nextflix-clone-de2c4.firebaseapp.com",
    projectId: "nextflix-clone-de2c4",
    storageBucket: "nextflix-clone-de2c4.appspot.com",
    messagingSenderId: "355640530249",
    appId: "1:355640530249:web:96893d1b8cc3fd01d97698"
};

const firebaseApp = initializeApp(firebaseConfig);
// const firebaseApp  = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
export const auth = getAuth(firebaseApp);
// const auth = firebase.auth();

// export { auth };
// export default db;