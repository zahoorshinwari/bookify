import { createContext, useContext, useEffect, useState  } from 'react'
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged  } from "firebase/auth"
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

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
const firestore = getFirestore(FirebaseApp)
const storage = getStorage(FirebaseApp)


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
    

    // this is for checking that the user is login or not
    const [user, setUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            if(user) setUser(user);
            else setUser(null)

            console.log("user", user)
        })
    } , [])

    const isLoggedIn = user ? true : false

    // for checking that what data i have
    console.log(user);

    // listing of data in firestore
    const handleCreateNewListing = async (name, isbnNUmber, price, coveredPic) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${coveredPic.name}`)
        const uploadResult = await uploadBytes(imageRef, coveredPic);
        return await addDoc(collection(firestore, 'books'), {
            name,
            isbnNUmber,
            price,
            imageURL: uploadResult.ref.fullPath,
            userId: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL : user.photoURL,

        })
        
    }

    // getting all the data
    const listAllBooks = () => {
        return getDocs(collection(firestore, "books"))
    }

    // download the image url and get it
    const getImageURL = (path) => {
        return getDownloadURL(ref(storage, path))
    }

    
    return <FirebaseContext.Provider 
    value={{
            signupUserWithEmailAndPassword,
            signinUsersWithEmailAndPassword, 
            signinWithGoogle,
            isLoggedIn,
            handleCreateNewListing,
            listAllBooks,
            getImageURL,
            }}
        >

        {props.children} 
    </FirebaseContext.Provider>
}