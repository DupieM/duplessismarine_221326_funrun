import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMyCourseList } from '../services/DbService';
import { useFocusEffect } from '@react-navigation/native';

function CompetitionScreen({ navigation }) {

  const [courseItems, setCourseItems] = useState([]);

  useEffect(() => { //only running on first load, but when naviagting back doesn't rereander
    handleGettingOfData()
  }, [])

  const handleGettingOfData = async () => {
    var allData = await getMyCourseList()
    setCourseItems(allData)
  }


  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to FunRun</Text>
        <Text style={styles.subtitle}>Choose your course</Text>
      </View>
      <View style={styles.courseone}>
        {
          courseItems != [] ? (
            courseItems.map((course, index) => (
              <TouchableOpacity key={index} style={styles.course}
                onPress={() => {
                  navigation.navigate("Entry", { // Navigate to the detail screen with the specific params
                      courseId: course.id,
                      courseName: course.name,
                      courseDescription: course.description,
                  })
                }}>
                <Image
                  style={styles.courseimg} 
                  source={require('../assets/Course_1.jpg')}
                />
                <View style={styles.subcoursename}>
                  <Text style={styles.mainhead}>{course.name}</Text>
                  <Image
                    style={styles.courseimg2} 
                    source={require('../assets/ticket_icon.png')}
                  />
                </View>
              </TouchableOpacity> 
            ))
          ) : (
            <Text>No Items Found Yet</Text>
          )
        }
      </View>  
    </ScrollView>
  )
}

export default CompetitionScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E79C"
  },
  title: {
    fontFamily:'Itim',
    marginTop: 30,
    fontSize: 38,
    fontWeight: '500',
    color: "#194D10",
    textAlign: 'center'
  },
  subtitle: {

    fontSize: 28,
    fontWeight: '500',
    color: "#A64510",
    textAlign: 'center',
    marginTop: 10
  },
  courseone: {
    marginTop: 15,
    marginBottom: 14,
    marginLeft: 7,
    marginRight: 5,
    height: 1100,
    flexWrap: 'wrap'
  },
  course: {
    backgroundColor: '#263A38',
    height: 210,
    width: 160,
    marginRight: 3,
    marginBottom: 10,
    borderRadius: 15,
    padding: 10,
    marginLeft: 8,
  },
  mainhead: {
    color: '#FFECEC',
    fontSize: 22,
    fontWeight: '600',
    marginRight: 7,
  },
  courseimg: {
    height: 140,
    width: 140,
    borderRadius: 10,
  },
  courseimg2: {
    height: 25,
    width: 17,
    marginTop: 5
  },
  subcoursename: {
    flexDirection: 'row',
    marginTop: 3
  },
})