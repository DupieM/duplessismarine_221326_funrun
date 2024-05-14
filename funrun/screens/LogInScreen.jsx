import { StyleSheet, View, Text, Image, ScrollView, TextInput, } from 'react-native'
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
        <Text>Forgot Password?</Text>
      </View>
      <View>

      </View>
      <View>
        <Text>Don't have an account Sign Up</Text>
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
    marginLeft: 30,
    borderRadius: 30,
    width: '80%',
    color: '#FFA948',
  },

})