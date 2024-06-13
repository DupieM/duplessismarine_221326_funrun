import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const ContestantCard = ({course, navigation}) => {

  const [entries, setEntries] = useState([])

  // get specific course entry information
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

      <View style={styles.contestantbox}>
        {entries != [] ? (
          entries.map((item, index) => (
            <TouchableOpacity key={index}
              onPress={() => {
              navigation.navigate("Judging", { // Navigate to the detail screen with the specific params
                itemId: item.id,
                contestantName: item.con_name,
                courseName: course.name,
              })
            }}>
              <Text style={styles.enter}>{item.con_name}</Text>
            </TouchableOpacity>
          ))
        ) : <Text>No Readings Yet</Text>}
      </View>    
    </View>  
    )  
}

export default ContestantCard

const styles = StyleSheet.create({   
    enterfield: {
      backgroundColor: '#263A38',
      height: 198,
      width: '90%',
      marginLeft: 18,
      marginBottom: 10,
      borderRadius: 15,
      padding: 10,
    },
    title: {
      fontFamily:'Itim',
      marginTop: -12,
      fontSize: 40,
      fontWeight: '500',
      color: "#FFECEC",
      textAlign: 'center'
    },
    contestantbox: {
      marginLeft: 10,
      marginRight: 10,
      height: 120,
      flexWrap: 'wrap',
      padding: 8
    },
    enter: {
      backgroundColor: 'rgba(166, 69, 16, 1)',
      height: 44,
      fontSize: 25,
      fontWeight: '500',
      paddingLeft: 1,
      paddingTop: 4,
      marginRight: 7,
      marginBottom: 8,
      borderRadius: 10,
      width: 130,
      color: '#FFECEC',
      textAlign: 'center'
    },
  })