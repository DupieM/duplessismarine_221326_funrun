import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground, } from 'react-native'
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

function SignUpScreen() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  
  const data = [
    { label: 'Contestant', value: '1' },
    { label: 'Marshall', value: '2' }
  ]

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../assets/signup_bg.png')} style={styles.img}>
        <Text style={styles.mainhead}>Ready, Set, Go</Text>
        <View style={styles.searchfield}>
          <TextInput style={styles.search} placeholder='Name' placeholderTextColor="#D68C1C"/>
          <TextInput style={styles.search} placeholder='Email' placeholderTextColor="#D68C1C"/>
          <TextInput style={styles.search} placeholder='Password' placeholderTextColor="#D68C1C"/>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder='Role'
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <TouchableOpacity style={styles.Btn} onPress={() => console.log("Button Pressed")}>
          <Text style={styles.Btntext}>Sign Up</Text>
        </TouchableOpacity>


      </ImageBackground>
  </ScrollView>
  )
}

export default SignUpScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A9966'
  },
  img: {
    height: 732,
    flex: 1,
    justifyContent: 'center',
  },
  mainhead: {
    color: '#FFA948',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 30
  },
  searchfield: {
    marginBottom: 30
  },
  search: {
    backgroundColor: '#194D10',
    height: 60,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 10,
    marginLeft: 35,
    borderRadius: 30,
    width: '80%',
    color: '#FFA948',
    marginBottom: 15
  },
  dropdown: {
    height: 50,
    backgroundColor: '#194D10',
    height: 60,
    width: '80%',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginLeft: 35,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 10,
  },
  placeholderStyle: {
    fontSize: 18,
    color: '#D68C1C',
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'black'
  },
  Btn: {
    backgroundColor: '#263A38',
    width: 240,
    marginLeft: 55,
    padding: 6,
    borderRadius: 50,
    marginBottom: 25
  },
  Btntext: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    color: '#FFA948'
  },
})