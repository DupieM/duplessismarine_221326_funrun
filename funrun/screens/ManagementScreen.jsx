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

  //Toggle 
  const [toggleValue, setToggleValue] = useState(false);
  const [toggleValue1, setToggleValue1] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Management</Text>
      <View style={styles.box}>
        <Text style={styles.subtitle}>FunRun</Text>
        <Toggle
            value={toggleValue}
            onPress={(newState) => setToggleValue(newState)}
            leftTitle="On"
            rightTitle="Off"
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
                  value={toggleValue1}
                  onPress={(newState) => setToggleValue1(newState)}
                  leftTitle="On"
                  rightTitle="Off"
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
    fontSize: 50,
    fontWeight: 'bold',
    color: "#194D10",
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "#1B666B",
    textAlign: 'left',
    marginBottom: 6,
    marginLeft: 15,
    marginRight: 108,
    marginTop: -8
  },
  subtitle2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#1B666B",
    textAlign: 'left',
    marginBottom: 6,
    marginLeft: 15,
    marginRight: 20,
    marginTop: -5
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#263A38',
    width: 200,
    marginLeft: 85,
    padding: 6,
    borderRadius: 50,
    marginBottom: 30
  },
  btntext: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    color: '#FFA948'
  },
  box: {
    flexWrap: 'wrap',
    height: 50,
    marginBottom: 10,
    paddingTop: 8
  }
})