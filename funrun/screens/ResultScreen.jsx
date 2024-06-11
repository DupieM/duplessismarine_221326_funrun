import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getTimeResluts, getTimeReslutsone, getTimeReslutssecond, getTimeReslutsthird } from '../services/DbService';

function ResultScreen() {

  //Resluts data 
  const [reslutTimesOne, setReslutTimesOne] = useState([]); // 1ste Place
  const [reslutTimesTwo, setReslutTimesTwo] = useState([]); // 2nd place
  const [reslutTimesThree, setReslutTimesThree] = useState([]); // 3rd place
  const [reslutTimes, setReslutTimes] = useState([]); // 4th - etc. place

  useEffect(() => { //only running on first load, but when naviagting back doesn't rereander
    handleGettingOfData_One() // 1ste place
    handleGettingOfData_Two() // 2nd place
    handleGettingOfData_Three() // 3rd place
    handleGettingOfData() // 4th - etc. place
  }, [])

  //getting reslut data for 1ste place
  const handleGettingOfData_One = async () => {
    var allData = await getTimeReslutsone()
    setReslutTimesOne(allData)
  }

  //getting reslut data for 2nd place
  const handleGettingOfData_Two = async () => {
    var allData = await getTimeReslutssecond()
    setReslutTimesTwo(allData)
  }

  //getting reslut data for 3rd place
  const handleGettingOfData_Three = async () => {
    var allData = await getTimeReslutsthird()
    setReslutTimesThree(allData)
  }

  //getting reslut data for 3rd place
  const handleGettingOfData = async () => {
    var allData = await getTimeResluts()
    setReslutTimes(allData)
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results Board</Text>
      <View style={styles.positionone}>
        <Image
          style={styles.crown} 
          source={require('../assets/crown.png')}
        />
        {
          reslutTimesOne != [] ? (
            reslutTimesOne.map((times, index) => (
              <View key={index}>
                <Text style={styles.profname}>{times.contestantname}</Text>
                <Text style={styles.profname}>{times.coursename}</Text>
                <Text style={styles.profname}>{times.time}</Text>
              </View>
            ))
          ) : (
            <Text>No Items Found Yet</Text>
          )
        }
      </View>
      <View style={styles.positiontwo}>
        {
          reslutTimesTwo != [] ? (
            reslutTimesTwo.map((times, index) => (
              <View key={index}>
                <Text style={styles.profname}>{times.contestantname}</Text>
                <Text style={styles.profname}>{times.coursename}</Text>
                <Text style={styles.profname}>{times.time}</Text>
              </View>
            ))
          ) : (
            <Text>No Items Found Yet</Text>
          )
        }
      </View>
      <View style={styles.positionthree}>
        {
          reslutTimesThree != [] ? (
            reslutTimesThree.map((times, index) => (
              <View key={index}>
                <Text style={styles.profname}>{times.contestantname}</Text>
                <Text style={styles.profname}>{times.coursename}</Text>
                <Text style={styles.profname}>{times.time}</Text>
              </View>
            ))
          ) : (
            <Text>No Items Found Yet</Text>
          )
        }
      </View>
      <Image 
        style={styles.podium} 
        source={require('../assets/podium.png')}
      />
      <View style={styles.rest}>
        {
          reslutTimes != [] ? (
            reslutTimes.map((times, index) => (
              <View style={styles.contestant} key={index}>
                <Text style={styles.number}>{times.contestantname}</Text>
                <Text style={styles.number}>{times.coursename}</Text>
                <Text style={styles.number}>{times.time}</Text>
              </View>
            ))
          ) : (
            <Text>No Items Found Yet</Text>
          )
        }
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
    paddingLeft: 10,
    backgroundColor: 'rgba(166, 69, 16, 0.2)',
    marginBottom: 12
  },
  number: {
    fontSize: 25,
    fontWeight: '500',
    marginRight: 17,
    color: '#FFA948'
  }
})