import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

function JudgingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Judging Screen</Text>
    </View>
  )
}

export default JudgingScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#151718"
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#ECEDEE"
  }
})