// Firestore functionality
import {  collection, addDoc, getDocs, orderBy, query, doc } from "firebase/firestore"
import { db } from "../firebase";

//Create rest of user information from sign up page
export const createUserInformation = async (info) => {
    try {
        //TODO: verander addDOc na setdoc, uid van authentication nodig he
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
    // var q = query( collection(db, "courses"), orderBy('name', "asc") )
    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((doc) => {
        allCourses.push({...doc.data(), id: doc.id}); //push each docs' data to the array I wnat to return
        // console.log(doc.data())
    });

    // console.log(allCourses)

    return allCourses
    
}

// Create Entry for Contestant
export const createNewEntry = async (courseId, entryData) => {
    try {
        // specifying where to add the entries
        const courseRef = doc(db, "courses", courseId) // adding specific doc's id

        // specifying the subcollection we want to add
        const entryRef = collection(courseRef, "entries")

        // adding the document into this subcollection
        const docRef = await addDoc(entryRef, entryData)

        console.log("Success adding doc with id:" + docRef.id)

        return true //success
    } catch (e) {
        console.error("Something went wrong adding entry document:", e);
        return false // failed
    }
}

// Create entry for timeing
export const createNewTime = async (time) => {
    try {
        const docRef = await addDoc(collection(db, "results"), time);

        console.log("Success adding time:" + docRef.id)

        return true //success
    } catch (e) {
        console.error("Error adding document: ", e);
        return false //failed
    }
}

// Get time for results page