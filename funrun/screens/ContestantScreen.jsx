import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

function ContestantScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contestants</Text>
    </ScrollView>
  )
}

export default ContestantScreen


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
})