import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

function ResultScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results Board</Text>
      <View>
        <Image
          style={styles.profimg} 
          source={require('../assets/Dummy_avatar.png')}
        />
        <Text style={styles.profname}>Name</Text>
      </View>
      {/* <View>
        <Image
          style={styles.profimg} 
          source={require('../assets/Dummy_avatar.png')}
        />
        <Text style={styles.profname}>Name</Text>
      </View>
      <View>
        <Image
          style={styles.profimg} 
          source={require('../assets/Dummy_avatar.png')}
        />
        <Text style={styles.profname}>Name</Text>
      </View> */}
      <Image/>
      <View>
        
      </View>
    </ScrollView>
  )
}

export default ResultScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E79C"
  },
  title: {
    textAlign: 'center',
    marginTop: 37,
    fontSize: 38,
    fontWeight: 'bold',
    color: "#194D10"
  },
  profimg: {
    height: 80,
    width: 80,
    marginTop: 20
  },
  profname: {
    fontSize: 28,
  }
})