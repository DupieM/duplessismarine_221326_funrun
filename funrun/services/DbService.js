// Firestore functionality
import { addDoc, collection, getDocs, query } from "firebase/firestore"
import { db } from "../firebase";

//Create rest of user information from sign up page
export const createUserInformation = async (info) => {
    try {
        //docRef - our reference to our newly created document (brand new with a self-generated ID)
        const docRef = await addDoc(collection(db, "users"), info);
        console.log("Document written with ID: ", docRef.id);
        return true
    } catch (e) {
        console.error("Error adding document: ", e);
        return false
    }
}

// Get all the obstacle Courses
export const getMyCourseList = async () => {

    var allCourses = [] //array that we want to return

    // Getting the data from Firestore
    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((doc) => {
        allCourses.push({...doc.data(), id: doc.id}); //push each docs' data to the array I wnat to return
        console.log(doc.data())
    });

    return allCourses
}

// Create Entry for Contestant

// Create entry for time

// Get time for results page