import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'

function LogInScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/background.png')}/>
      <View>
        <Text style={styles.mainhead}>Welcome</Text>
      </View>
      <View style={styles.searchfield}>
        <TextInput style={styles.search} placeholder='Email'/>
      </View>
      <View>
        <TextInput style={styles.search} placeholder='Password'/>
        <Text style={styles.password}>Forgot Password?</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.Btn} onPress={() => console.log("Button Pressed")}>
          <Text style={styles.Btntext}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupcontainer}>
        <Text style={styles.signup}>
          Don't have an account
        </Text>
        <Text style={styles.link}>
          Sign Up
        </Text>
      </View>
    </ScrollView>
  )
}

export default LogInScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A9966'
  },
  mainhead: {
    color: '#FFA948',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 7
  },
  searchfield: {
    marginBottom: 15
  },
  search: {
    backgroundColor: '#194D10',
    height: 60,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 10,
    marginLeft: 35,
    borderRadius: 30,
    width: '80%',
    color: '#FFA948',
  },
  password: {
    marginLeft: 50,
    marginTop: 5,
    marginBottom: 27,
    fontSize: 15,
    color: '#263A38'
  },
  Btn: {
    backgroundColor: '#263A38',
    width: 240,
    marginLeft: 55,
    padding: 6,
    borderRadius: 50,
    marginBottom: 25
  },
  Btntext: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    color: '#FFA948'
  },
  signupcontainer: {
    flexDirection: 'row',
    marginLeft: 77
  },
  signup: {
    textAlign: 'center',
    color: '#194D10'
  },
  link: {
    marginLeft: 6,
    textAlign: 'center',
    color: '#194D10',
    textDecorationLine: 'underline',
  }
})