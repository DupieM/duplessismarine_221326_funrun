import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMyCourseList } from '../services/DbService';
import ContestantCard from './ContestantCard';

function ContestantScreen(props) {
   // Getting Courses
   const [courses, setCourseItems] = useState([]);

   useEffect(() => { //only running on first load, but when naviagting back doesn't rereander
     handleGettingOfData()
   }, [])
 
   const handleGettingOfData = async () => {
     var allData = await getMyCourseList()
     setCourseItems(allData)
   }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contestants</Text>
      
        {courses != [] ? (
          courses.map((course) => (
            <ContestantCard course={course} key={course.id} />
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
    fontSize: 50,
    fontWeight: 'bold',
    color: "#194D10",
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20
  },
})