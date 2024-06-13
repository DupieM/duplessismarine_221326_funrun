// Firebase Auth Functions
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { createUserInformation } from "./DbService";



// Log In
export const handleLogin = async (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Logged In User -" + user.email)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });

}

// Google Signing

export const googlesignin = () => {
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

// Create an account
export const handleSignin = async (email, password, info) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Signed In User -" + user.uid)
    // TODO: send uid back
    const db = await createUserInformation(info, user.uid)
    return user.uid
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    return null
  });
}

// Log Out
export const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out successfully');
    })
    .catch((error) => {
      console.log('Error signing out:', error);
    });
}