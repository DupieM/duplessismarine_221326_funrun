import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMyCourseList } from '../services/DbService';
import ContestantCard from './ContestantCard';
import { useNavigation } from '@react-navigation/native';

function ContestantScreen() {

  const navigation = useNavigation();

   // Getting Courses
   const [courses, setCourseItems] = useState([]);

   useEffect(() => { //only running on first load, but when naviagting back doesn't rereander
     handleGettingOfData()
   }, [])
 
   // get the specific data from the database
   const handleGettingOfData = async () => {
     var allData = await getMyCourseList()
     setCourseItems(allData)
   }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contestants</Text>
      
        {courses != [] ? (
          courses.map((course) => (
            <ContestantCard course={course} key={course.id} navigation={navigation}/>
          ))
        ) : null}
      
    </ScrollView>
  )
}

export default ContestantScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E79C"
  },
  title: {
    fontFamily:'PoetsenOne',
    fontSize: 53,
    fontWeight: '500',
    color: "#194D10",
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20
  },
})