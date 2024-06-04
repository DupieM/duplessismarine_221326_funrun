// Firebase Auth Functions
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

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

    var allUsers = []

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        allUsers.push({...doc.data(), id: doc.id}); //push each docs' data to the array I wnat to return
        // console.log(doc.data())
    });

    return allUsers

}

// Create an account
export const handleSignin = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Signed In User -" + user.email)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
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