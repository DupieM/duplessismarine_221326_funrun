import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

function JudgingScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Judging</Text>
    </ScrollView>
  )
}

export default JudgingScreen

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