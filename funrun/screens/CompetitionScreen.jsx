import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

function CompetitionScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to FunRun</Text>
        <Text style={styles.subtitle}>Choose your course</Text>
      </View>
      <View style={styles.containerfive}>
            <View style={styles.course}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.coursetwo}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.coursethree}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.coursefour}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.coursefive}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.coursesix}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.courseseven}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.courseeight}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.coursenine}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.courseten}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.courseeleven}>
              <Text style={styles.mainhead}>???</Text>
            </View>
            <View style={styles.coursetwelve}>
              <Text style={styles.mainhead}>???</Text>
            </View>
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
      fontSize: 38,
      fontWeight: 'bold',
      color: "#194D10"
  },
  subtitle: {
    fontSize: 28,
    fontWeight: '500',
    color: "#023E48"
  },
  containerfive: {
    marginTop: 14,
    marginBottom: 14,
    marginLeft: 25,
    marginRight: 25,
    height: 1320,
    flexWrap: 'wrap'
  },
  mainhead: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600'
  },
  course: {
    backgroundColor: 'red',
    height: 200,
    width: 145,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13
  },
  coursetwo: {
    backgroundColor: 'darkred',
    height: 200,
    width: 145,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13,
    marginBottom: 20,
  },
  coursethree: {
    backgroundColor: 'orange',
    height: 200,
    width: 145,
    marginBottom: 20,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13
  },
  coursefour: {
    backgroundColor: 'darkorange',
    height: 200,
    width: 145,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13,
    marginBottom: 20,
  },
  coursefive: {
    backgroundColor: 'yellow',
    height: 200,
    width: 145,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13,
    marginBottom: 20,
  },
  coursesix: {
    backgroundColor: 'green',
    height: 200,
    width: 145,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13,
    marginBottom: 20,
  },
  courseseven: {
    backgroundColor: 'darkgreen',
    height: 200,
    width: 145,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13,
    marginBottom: 20,
  },
  courseeight: {
    backgroundColor: 'blue',
    height: 200,
    width: 145,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13,
    marginBottom: 20,
  },
  coursenine: {
    backgroundColor: 'darkblue',
    height: 200,
    width: 145,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13,
    marginBottom: 20, 
  },
  courseten: {
    backgroundColor: 'purple',
    height: 200,
    width: 145,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13,
    marginBottom: 20,
  },
  courseeleven: {
    backgroundColor: 'violet',
    height: 200,
    width: 145,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13,
    marginBottom: 20,
  },
  coursetwelve: {
    backgroundColor: 'pink',
    height: 200,
    width: 145,
    borderRadius: 26,
    paddingTop: 20,
    paddingLeft: 13,
    marginBottom: 20,
  },

})