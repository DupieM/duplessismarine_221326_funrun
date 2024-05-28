import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

function ResultScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results Board</Text>
      <View style={styles.positionone}>
        <Image
          style={styles.crown} 
          source={require('../assets/crown.png')}
        />
        <Image
          style={styles.profimg} 
          source={require('../assets/Dummy_avatar.png')}
        />
        <Text style={styles.profname}>Name</Text>
      </View>
      <View style={styles.positiontwo}>
        <Image
          style={styles.profimg} 
          source={require('../assets/Dummy_avatar.png')}
        />
        <Text style={styles.profname}>Name</Text>
      </View>
      <View style={styles.positionthree}>
        <Image
          style={styles.profimg} 
          source={require('../assets/Dummy_avatar.png')}
        />
        <Text style={styles.profname}>Name</Text>
      </View>
      <Image 
        style={styles.podium} 
        source={require('../assets/podium.png')}
      />
      <View style={styles.rest}>
        <View style={styles.contestant}>
          <Text style={styles.number}>Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>4</Text>
        </View>
        <View style={styles.contestant}>
          <Text style={styles.number}>Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>5</Text>
        </View>
        <View style={styles.contestant}>
          <Text style={styles.number}>Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>6</Text>
        </View>
        <View style={styles.contestant}>
          <Text style={styles.number}>Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>7</Text>
        </View>
        <View style={styles.contestant}>
          <Text style={styles.number}>Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>8</Text>
        </View>
        <View style={styles.contestant}>
          <Text style={styles.number}>Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>9</Text>
        </View>
        <View style={styles.contestant}>
          <Text style={styles.number}>Name</Text>
          <Text style={styles.number}>Time</Text>
          <Text style={styles.number}>10</Text>
        </View>
        <View style={styles.contestant}>
          <Text style={styles.number}>etc.</Text>
        </View>
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
    fontSize: 50,
    fontWeight: 'bold',
    color: "#194D10"
  },
  positionone: {
    marginTop: 30,
    marginLeft: 130
  },
  positiontwo: {
    marginLeft: 6,
    marginTop: -40
  },
  positionthree: {
    marginLeft: 255,
    marginTop: -70
  },
  profimg: {
    marginLeft: 8,
    height: 80,
    width: 80,
    marginTop: 10
  },
  crown: {
    width: 95,
    height: 86
  },
  profname: {
    marginLeft: 12,
    fontSize: 28,
  },
  podium: {
    marginTop: -135,
    width: 360,
    height: 320
  },
  rest: {
    backgroundColor: '#263A38',
    padding: 12
  },
  contestant: {
    flexDirection: 'row',
    paddingLeft: 20,
    backgroundColor: 'rgba(166, 69, 16, 0.2)',
    marginBottom: 12
  },
  number: {
    fontSize: 28,
    fontWeight: '500',
    marginRight: 70,
    color: '#FFA948'
  }
})