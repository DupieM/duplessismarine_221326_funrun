import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

function ContestantScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contestants</Text>
      <View style={styles.enterfield}>
        <Text style={styles.enter}>Contestant Name</Text>
      </View>
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
    marginTop: 30,
    marginBottom: 20
  },
  enterfield: {
    marginBottom: 18,
  },
  enter: {
    backgroundColor: 'rgba(255, 191, 96, 0.3)',
    height: 50,
    fontSize: 32,
    padding: 2,
    paddingLeft: 20,
    marginLeft: 35,
    borderRadius: 10,
    width: '80%',
    color: '#00272E',
  },
})