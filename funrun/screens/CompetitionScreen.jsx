import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMyCourseList } from '../services/DbService';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

function CompetitionScreen({ navigation }) {

  const [courseItems, setCourseItems] = useState([]);

  // Fetch data when screen is focused
  useFocusEffect(
    useCallback(() => {
      const handleGettingOfData = async () => {
        const allData = await getMyCourseList();
        setCourseItems(allData);
        console.log(allData[1].image)
      };

      handleGettingOfData();
    }, [])
  );

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
              <TouchableOpacity key={index} style={[styles.course, !course.active && styles.courseDisabled]}
                onPress={() => {
                  if (course.active) { // Only allow navigation if course is active
                    navigation.navigate("Entry", {
                      courseId: course.id,
                      courseName: course.name,
                      courseDescription: course.description,
                    });
                  }
                }}
                disabled={!course.active} // Disable TouchableOpacity if course is inactive
                >
                <Image
                  style={styles.courseimg} 
                  source={{uri: course.image}}
                />
                <View style={styles.subcoursename}>
                  <Text style={styles.mainhead}>
                    {course.name}
                  </Text>
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
    fontFamily:'PoetsenOne',
    marginTop: 38,
    fontSize: 37,
    fontWeight: '500',
    color: "#194D10",
    textAlign: 'center'
  },
  subtitle: {
    fontFamily:'Itim',
    fontSize: 32,
    fontWeight: '600',
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
  courseDisabled: {
    opacity: 0.5, // Lighter opacity for inactive courses
  },
  mainhead: {
    fontFamily:'Itim',
    color: '#FFECEC',
    fontSize: 24,
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