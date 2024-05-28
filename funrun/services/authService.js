// Firebase Auth Functions
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// Log In
export const handleLogin = (email, password) => {

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

// Create an account
