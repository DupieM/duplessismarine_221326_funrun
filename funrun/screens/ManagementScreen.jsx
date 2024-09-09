import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { handleSignOut } from '../services/authService'
import { useState } from "react";
import Toggle from "react-native-toggle-element";
import { getMyCourseList } from '../services/DbService';

function ManagementScreen() {

  // Getting Courses
  const [courseItems, setCourseItems] = useState([]);

  useEffect(() => { //only running on first load, but when naviagting back doesn't rereander
    handleGettingOfData()
  }, [])

  const handleGettingOfData = async () => {
    var allData = await getMyCourseList()
    setCourseItems(allData)
  }

  // Logout
  const handleSignout = () => {
    handleSignOut()
  }

  // Toggle handler for individual course
  const [toggleStates, setToggleStates] = useState({}); // Individual toggle states

  const handleToggle = (courseId, newState) => {
    setToggleStates(prevState => ({
      ...prevState,
      [courseId]: newState // Update toggle state for specific course
    }));
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Management</Text>
      <View style={styles.box}>
        <Text style={styles.subtitle}>FunRun</Text>
        <Toggle
            value={toggleStates['FunRun'] || false}
            onPress={(newState) => handleToggle('FunRun', newState)}
            leftTitle="Open"
            rightTitle="Close"
            trackBar={{
              activeBackgroundColor: "#00272E",
              inActiveBackgroundColor: "#023E48",
              width: 100,
              height: 35,
            }}
            thumbButton={{
              width: 40,
              height: 40,
              radius: 50,
              activeBackgroundColor: "#1B666B",
              inActiveBackgroundColor: "#FFA948",
            }}
          />
      </View>
      
      {
        courseItems != [] ? (
          courseItems.map((course, index) => (
            <View style={styles.box} key={index}>
              <Text style={styles.subtitle2}>{course.name}</Text>
              <Toggle
                  value={toggleStates[course.id] || false} // Use course-specific toggle state
                  onPress={(newState) => handleToggle(course.id, newState)}
                  leftTitle="Open"
                  rightTitle="Close"
                  trackBar={{
                    activeBackgroundColor: "#00272E",
                    inActiveBackgroundColor: "#023E48",
                    width: 100,
                    height: 35,
                  }}
                  thumbButton={{
                    width: 40,
                    height: 40,
                    radius: 50,
                    activeBackgroundColor: "#1B666B",
                    inActiveBackgroundColor: "#FFA948",
                  }}
                />
              </View>
          ))
        ) : (
          <Text>No Items Found Yet</Text>
        )
      }
      
      
      <TouchableOpacity style={styles.btn} onPress={handleSignout}>
          <Text style={styles.btntext}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ManagementScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E79C"
  },
  title: {
    fontFamily:'PoetsenOne',
    fontSize: 50,
    fontWeight: '500',
    color: "#194D10",
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  subtitle: {
    fontFamily:'Itim',
    fontSize: 38,
    fontWeight: '500',
    color: "#1B666B",
    textAlign: 'left',
    marginBottom: 6,
    marginLeft: 15,
    marginTop: -8
  },
  subtitle2: {
    fontFamily:'Itim',
    fontSize: 32,
    fontWeight: '500',
    color: "#1B666B",
    textAlign: 'left',
    marginBottom: 6,
    marginLeft: 15,
    marginTop: -5
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#263A38',
    width: 200,
    marginLeft: 85,
    padding: 9,
    borderRadius: 50,
    marginBottom: 30
  },
  btntext: {
    fontFamily:'PoetsenOne',
    fontSize: 35,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFA948'
  },
  box: {
    flexDirection: 'row', 
    justifyContent: 'space-between',  
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60,  
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 8,
  }
})