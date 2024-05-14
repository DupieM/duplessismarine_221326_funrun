import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

function ManagementScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Management Screen</Text>
    </View>
  )
}

export default ManagementScreen


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