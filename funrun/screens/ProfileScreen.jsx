import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { handleSignOut } from '../services/authService'

function ProfileScreen() {

// Logout
const handleSignout = () => {
  handleSignOut()
}

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Page</Text>
      <Image 
        style={styles.profimg} 
        source={require('../assets/Dummy_avatar.png')}
      />
      <Image 
        style={styles.addimg} 
        source={require('../assets/add.png')}
      />
      <View style={styles.enterfield}>
        <Text style={styles.enter}>Name</Text>
      </View>
      <View style={styles.enterfield}>
        <Text style={styles.enter}>Email</Text>
      </View>
      <View style={styles.enterfield2}>
        <Text style={styles.enter}>Password</Text>
        <Image 
          style={styles.editimg} 
          source={require('../assets/edit.png')}
        />
      </View>
      <Text style={styles.subhead}>Badges</Text>
      <View style={styles.badgebox}>
        <Image 
          style={styles.badgeimg} 
          source={require('../assets/emblem.png')}
        />
        <Image 
          style={styles.badgeimg} 
          source={require('../assets/emblem.png')}
        />
      </View>
      <Text style={styles.subhead}>Previous Results</Text>
      <View style={styles.contestant}>
          <Text style={styles.number}>OC-Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>1</Text>
      </View>
      <View style={styles.contestant}>
          <Text style={styles.number}>OC-Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>2</Text>
      </View>
      <View style={styles.contestant}>
          <Text style={styles.number}>OC-Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>4</Text>
      </View>
      <View style={styles.contestant}>
          <Text style={styles.number}>OC-Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>9</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleSignout}>
          <Text style={styles.btntext}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ProfileScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E79C"
  },
  title: {
    fontFamily:'PoetsenOne',
    fontSize: 55,
    fontWeight: '500',
    color: "#194D10",
    textAlign: 'center',
    marginTop: 37
  },
  profimg: {
    height: 210,
    width: 210,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 75
  },
  addimg: {
    height: 50,
    width: 53,
    marginTop: -66,
    marginLeft: 220,
    marginBottom: 20
  },
  enterfield: {
    marginBottom: 18,
  },
  enterfield2: {
    marginBottom: 18,
    flexDirection: 'row',
  },
  enter: {
    fontFamily:'Itim',
    backgroundColor: 'rgba(255, 191, 96, 0.3)',
    height: 50,
    fontSize: 35,
    padding: 2,
    paddingLeft: 20,
    marginLeft: 35,
    borderRadius: 10,
    width: '80%',
    color: '#00272E',
  },
  subhead: {
    fontFamily:'PoetsenOne',
    fontSize: 37,
    fontWeight: '500',
    color: "#A64510",
    textAlign: 'left',
    marginLeft: 35,
    marginTop: 10,
    marginBottom: 10
  },
  badgebox: {
    flexDirection: 'row',
    marginLeft: 35
  },
  badgeimg: {
    marginRight: 30,
  },
  editimg: {
    width: 32,
    height: 31,
    marginLeft: -40,
    marginTop: 8
  },
  contestant: {
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: 'rgba(27, 102, 107, 0.3)',
    marginBottom: 18,
    marginLeft: 35,
    marginRight: 35
  },
  number: {
    fontFamily:'Itim',
    fontSize: 29,
    fontWeight: '600',
    marginRight: 33,
    color: '#00272E'
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
    fontFamily:'PoetsenOne',
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFA948'
  },
})