import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

function EntryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Name</Text>
    </View>
  )
}

export default EntryScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B9E79C"
  },
  title: {
      fontSize: 38,
      fontWeight: 'bold',
      color: "#194D10"
  }
})