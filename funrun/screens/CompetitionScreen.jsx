import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import { getMyCourseList } from '../services/DbService';
import { useFocusEffect } from '@react-navigation/native';

function CompetitionScreen({navigation}) {

  const [courseItems, setCourseItems] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      handleGettingOfData()

      return () => {
        // Do something when the screen is unfocused
      };
    }, [])
  );

  const handleGettingOfData = async () => {
    var allCourses = await getMyCourseList()
    setCourseItems(allCourses)
  }


  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to FunRun</Text>
        <Text style={styles.subtitle}>Choose your course</Text>
      </View>
      <View style={styles.containerfive}>
            <View style={styles.course}>
              <Image
                style={styles.courseimg} 
                source={require('../assets/Course_1.jpg')}
              />
              <View style={styles.subcoursename}>
                <Text style={styles.mainhead}>Name</Text>
                <Image
                  style={styles.courseimg2} 
                  source={require('../assets/ticket_icon.png')}
                />
              </View>
            </View>
            <View style={styles.course}>
              <Image
                style={styles.courseimg} 
                source={require('../assets/Course_1.jpg')}
              />
              <View style={styles.subcoursename}>
                <Text style={styles.mainhead}>Name</Text>
                <Image
                  style={styles.courseimg2} 
                  source={require('../assets/ticket_icon.png')}
                />
              </View>
            </View> 
            <View style={styles.course}>
              <Image
                style={styles.courseimg} 
                source={require('../assets/Course_1.jpg')}
              />
              <View style={styles.subcoursename}>
                <Text style={styles.mainhead}>Name</Text>
                <Image
                  style={styles.courseimg2} 
                  source={require('../assets/ticket_icon.png')}
                />
              </View>
            </View>
            <View style={styles.course}>
              <Image
                style={styles.courseimg} 
                source={require('../assets/Course_1.jpg')}
              />
              <View style={styles.subcoursename}>
                <Text style={styles.mainhead}>Name</Text>
                <Image
                  style={styles.courseimg2} 
                  source={require('../assets/ticket_icon.png')}
                />
              </View>
            </View>
            <View style={styles.course}>
              <Image
                style={styles.courseimg} 
                source={require('../assets/Course_1.jpg')}
              />
              <View style={styles.subcoursename}>
                <Text style={styles.mainhead}>Name</Text>
                <Image
                  style={styles.courseimg2} 
                  source={require('../assets/ticket_icon.png')}
                />
              </View>
            </View>
            <View style={styles.course}>
              <Image
                style={styles.courseimg} 
                source={require('../assets/Course_1.jpg')}
              />
              <View style={styles.subcoursename}>
                <Text style={styles.mainhead}>Name</Text>
                <Image
                  style={styles.courseimg2} 
                  source={require('../assets/ticket_icon.png')}
                />
              </View>
            </View>
            <View style={styles.course}>
              <Image
                style={styles.courseimg} 
                source={require('../assets/Course_1.jpg')}
              />
              <View style={styles.subcoursename}>
                <Text style={styles.mainhead}>Name</Text>
                <Image
                  style={styles.courseimg2} 
                  source={require('../assets/ticket_icon.png')}
                />
              </View>
            </View>
            <View style={styles.course}>
              <Image
                style={styles.courseimg} 
                source={require('../assets/Course_1.jpg')}
              />
              <View style={styles.subcoursename}>
                <Text style={styles.mainhead}>Name</Text>
                <Image
                  style={styles.courseimg2} 
                  source={require('../assets/ticket_icon.png')}
                />
              </View>
            </View>         
            <View style={styles.course}>
              <Image
                style={styles.courseimg} 
                source={require('../assets/Course_1.jpg')}
              />
              <View style={styles.subcoursename}>
                <Text style={styles.mainhead}>Name</Text>
                <Image
                  style={styles.courseimg2} 
                  source={require('../assets/ticket_icon.png')}
                />
              </View>
            </View>
            <View style={styles.course}>
              <Image
                style={styles.courseimg} 
                source={require('../assets/Course_1.jpg')}
              />
              <View style={styles.subcoursename}>
                <Text style={styles.mainhead}>Name</Text>
                <Image
                  style={styles.courseimg2} 
                  source={require('../assets/ticket_icon.png')}
                />
              </View>
            </View>
            </View>
      {/* <View>
        {
          courseItems != [] ? (
            courseItems.map((course, index) => (
              <TouchableOpacity key={index} style={styles.containerfive}>
                <View style={styles.course}>
                  <Image
                    style={styles.courseimg} 
                    source={course.image}
                  />
                  <View style={styles.subcoursename}>
                    <Text style={styles.mainhead}>{course.name}</Text>
                    <Image
                      style={styles.courseimg2} 
                      source={require('../assets/ticket_icon.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text>No Items Found Yet</Text>
          )
        }
        </View>   */}
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
    marginTop: 30,
    fontSize: 38,
    fontWeight: 'bold',
    color: "#194D10",
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 28,
    fontWeight: '500',
    color: "#A64510",
    textAlign: 'center'
  },
  containerfive: {
    marginTop: 25,
    marginBottom: 14,
    marginLeft: 14,
    marginRight: 25,
    height: 1400,
    flexWrap: 'wrap'
  },
  // containerfive: {
  //       backgroundColor: 'white',
  //       padding: 15,
  //       display: 'flex',
  //       flexDirection: 'row',
  //       alignItems: 'center',
  //       justifyContent: 'space-between',
  //       marginBottom: 10
  // },
  mainhead: {
    color: '#FFECEC',
    fontSize: 25,
    fontWeight: '600',
    marginRight: 7
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
  course: {
    backgroundColor: '#263A38',
    height: 220,
    width: 160,
    marginRight: 13,
    marginBottom: 13,
    borderRadius: 15,
    padding: 10,
  },
})