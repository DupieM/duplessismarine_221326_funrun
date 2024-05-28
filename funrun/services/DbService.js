// Firestore functionality
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../firebase";

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