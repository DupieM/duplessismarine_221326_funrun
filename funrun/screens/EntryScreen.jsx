import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

function EntryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Course Name</Text>
      <View style={styles.infobox}>
        <Text style={styles.subhead}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat. 
        </Text>
      </View>
      <Text style={styles.subtitle}>Enter Competition</Text>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter} placeholder='Enter Name' placeholderTextColor="#00272E"/>
      </View>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter} placeholder='Enter Skill Level' placeholderTextColor="#00272E"/>
      </View>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter} placeholder='Enter Age' keyboardType='numeric' placeholderTextColor="#00272E"/>
      </View>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter} placeholder='Enter Height' placeholderTextColor="#00272E"/>
      </View>
      <TouchableOpacity style={styles.Btn}>
          <Text style={styles.Btntext}>Enter</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default EntryScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E79C"
  },
  title: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 50,
    fontWeight: 'bold',
    color: "#194D10",
    textAlign: 'center'
  },
  infobox: {
    backgroundColor: "rgba(122, 153, 102, 0.4)",
    height: 167,
    width: 300,
    padding: 10,
    marginLeft: 30
  },
  subhead: {
    fontSize: 17,
    color: "#A64510"
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: '400',
    color: "#00272E",
    textAlign: 'center'
  },
  enterfield: {
    marginBottom: 18
  },
  enter: {
    backgroundColor: 'rgba(255, 191, 96, 0.7)',
    height: 60,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 10,
    marginLeft: 35,
    borderRadius: 30,
    width: '80%',
    color: '#00272E',
  },
  Btn: {
    backgroundColor: '#263A38',
    width: 200,
    marginLeft: 85,
    padding: 6,
    borderRadius: 50,
    marginBottom: 25
  },
  Btntext: {
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    color: '#FFA948'
  },
})