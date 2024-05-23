import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

function EntryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Name</Text>
      <View>
        <Text style={styles.subhead}>Course Name</Text>
        <Text style={styles.paragraph}>Course Name</Text>
      </View>
    </View>
  )
}

export default EntryScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#B9E79C"
  },
  title: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 38,
    fontWeight: 'bold',
    color: "#194D10"
  }
})