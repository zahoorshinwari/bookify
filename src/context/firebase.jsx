import { createContext, useContext  } from 'react'
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth"

const FirebaseContext = createContext(null)

const firebaseConfig = {
    apiKey: "AIzaSyAEQ8nt4h6Shfh1kmxzC8vD-ZqeuBj5lm4",
    authDomain: "bookify-firebase.firebaseapp.com",
    projectId: "bookify-firebase",
    storageBucket: "bookify-firebase.appspot.com",
    messagingSenderId: "108293587809",
    appId: "1:108293587809:web:4465b8addc78c468d2fb20",
    measurementId: "G-WQJHTCDZJJ"
  };

export const useFirebase = () => useContext(FirebaseContext)


const FirebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(FirebaseApp)

const googleProvider = new GoogleAuthProvider()

export const FirebaseProvider = (props) => {
    // this is for sign up
    const signupUserWithEmailAndPassword = (email, password) => 
    createUserWithEmailAndPassword(firebaseAuth, email, password);

    // this is for sign in
    const signinUsersWithEmailAndPassword = (email, password) => 
    signInWithEmailAndPassword(firebaseAuth, email, password);

    // this is for sign in with google
    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)
    
    
    return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, signinUsersWithEmailAndPassword, signinWithGoogle}}>
        {props.children} 
    </FirebaseContext.Provider>
}