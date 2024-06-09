import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const ContestantCard = (props) => {

    //Getting the specific entry of contestant for specific course
    const { course } = props

    const [entries, setEntries] = useState([])

    useFocusEffect(
      React.useCallback(() => {
        // Do something when the screen is focused
        console.log("In view... so do something...")

        //1. specify where we want the data to be added
        const courseRef = doc(db, "courses", course.id) //specific doc's ID
        //2. specify the subcollection in this document
        const entryRef = collection(courseRef, "entries")

        //onSnapshot = listen to the data changes
        const unsubscribe = onSnapshot(entryRef, (querySnapshot) => {

          const entryData = [];

          querySnapshot.forEach((doc) => {
            entryData.push(doc.data());
            console.log("Current readings: ", doc.data());
          });

          setEntries(entryData) //<-- updating useState that displays my readings
          
        });
  
        return () => {
          // Do something when the screen is unfocused
          // Useful for cleanup functions
          console.log("out of view....")
          unsubscribe(); //<- stops listening for data changes
        };
      }, [])
    );

    return (
        <View style={styles.enterfield}>

            <Text style={styles.title}>
                {course.name}
            </Text>
            
            {entries != [] ? (
                entries.map((item) => (
                    <TouchableOpacity style={styles.enterfield} key={item.id}>
                        <Text style={styles.enter}>{item.con_name}</Text>
                    </TouchableOpacity>
                ))
            ) : <Text>No Readings Yet</Text>}
            
        </View>
    
        
    )

    
}

export default ContestantCard

const styles = StyleSheet.create({
    readingsBlock: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 20
    },
    enterfield: {
      marginBottom: 18,
    },
    enter: {
      backgroundColor: 'rgba(255, 191, 96, 0.3)',
      height: 50,
      fontSize: 38,
      padding: 2,
      paddingLeft: 0,
      marginLeft: 37,
      borderRadius: 20,
      width: '80%',
      color: '#00272E',
      textAlign: 'center'
    },
  })