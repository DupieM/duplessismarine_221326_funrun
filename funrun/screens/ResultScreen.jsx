import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

function ResultScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results Board</Text>
    </View>
  )
}

export default ResultScreen


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