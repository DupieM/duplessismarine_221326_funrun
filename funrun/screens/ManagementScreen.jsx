import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { handleSignOut } from '../services/authService'

function ManagementScreen() {

  // Logout
const handleSignout = () => {
  handleSignOut()
}

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Management</Text>
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
    marginTop: 30
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
})