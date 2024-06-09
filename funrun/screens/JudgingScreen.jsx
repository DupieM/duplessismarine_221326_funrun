import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

function JudgingScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Judging</Text>
      <View style={styles.enterfield}>
        <Text style={styles.enter}>Contestant Name</Text>
      </View>
      <View style={styles.enterfield}>
        <Text style={styles.enter}>Course Name</Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.enter2}>Life Timer</Text>
        <Image />
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.Btntext}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>OR</Text>
      <View style={styles.box2}>
        <Text style={styles.enter2}>Stopwatch Timer</Text>
        <TextInput
          style={styles.enter3}
          placeholder='00:00:00'
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.Btntext}>Submit</Text>
        </TouchableOpacity>
      </View>
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
  enter2: {
    height: 60,
    fontSize: 32,
    padding: 8,
    marginLeft: 10,
    borderRadius: 10,
    color: '#FFA948',
  },
  box1: {
    height: 240,
    width: '80%',
    backgroundColor: 'rgba(25, 77, 16, 0.8)',
    marginLeft: 35,
    borderRadius: 20,
    marginTop: 10
  },
  box2: {
    height: 230,
    width: '80%',
    backgroundColor: 'rgba(25, 77, 16, 0.8)',
    marginLeft: 35,
    borderRadius: 20,
    marginBottom: 30
  },
  subtitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#1B666B",
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8
  },
  Btn: {
    backgroundColor: '#263A38',
    width: 140,
    marginLeft: 135,
    padding: 6,
    borderRadius: 50,
    marginBottom: 25
  },
  Btntext: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFA948'
  },
  enter3 : {
    backgroundColor: 'rgba(255, 191, 96, 0.3)',
    width: '90%',
    textAlign: 'center',
    padding: 0,
    fontSize: 60,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 17
  }
})