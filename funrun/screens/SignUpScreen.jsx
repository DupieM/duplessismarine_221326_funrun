import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground, } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { handleSignin } from '../services/authService';
import { createUserInformation } from '../services/DbService';

function SignUpScreen({ navigation }) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  
  const data = [
    { label: 'Contestant', value: '1' },
    { label: 'Marshall', value: '2' }
  ]

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const [role, setRole] = useState('')

  //Sign up Function
  const [isFormValid, setIsFormValid] = useState(false);
    useEffect(() => {
        // Check if all required fields are filled
        if (name.trim() && role.trim()) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [name, role]);

    const signin = () => {
      // handleCreation = async () => {
      //   //Need to pass all our data to the function

      //   //Make sure all the values have been entered - show error/disable button
      //   if (!isFormValid) {
      //       Alert.alert("Validation Error", "Please fill all the required fields.");
      //       return;
      //   }

      //   var infos = {name, role}
      //   var success = await createUserInformation(infos)
      //   if(success){
      //     navigation.navigate('Home')
      //   } else {
      //       //Validation why
      //       Alert.alert("Error", "Failed to create bucket list item.");
      //   }
      // };
      handleSignin(email, password);
    }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../assets/signup_bg.png')} style={styles.img}>
        <Text style={styles.mainhead}>Ready, Set, Go</Text>
        <View style={styles.searchfield}>
          <TextInput style={styles.search} placeholder='Name' placeholderTextColor="#00272E"
          onChangeText={newText => setName(newText)}
          defaultValue={name}
          />
          <TextInput style={styles.search} placeholder='Email' placeholderTextColor="#00272E"
            onChangeText={newText => setEmail(newText)}
            defaultValue={email}
          />
          <TextInput style={styles.search} placeholder='Password' placeholderTextColor="#00272E"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
          />
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
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
        <TouchableOpacity style={styles.Btn} onPress={signin}>
          <Text style={styles.Btntext}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.subhead}>------------ or ------------</Text>
        <View style={styles.imgcontainer}>
          <Image style={styles.imgoption} source={require('../assets/google.png')}/>
          <Image style={styles.imgoption} source={require('../assets/facebook.png')}/>
        </View>
      </ImageBackground>
  </ScrollView>
  )
}

export default SignUpScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9E79C'
  },
  img: {
    height: 730,
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center'
  },
  mainhead: {
    color: '#194D10',
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
    backgroundColor: '#FFBF60',
    height: 60,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 10,
    marginLeft: 35,
    borderRadius: 30,
    width: '80%',
    color: '#00272E',
    marginBottom: 15
  },
  dropdown: {
    height: 50,
    backgroundColor: '#FFBF60',
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
    color: '#00272E',
  },
  selectedTextStyle: {
    fontSize: 18,
    color: '#00272E',
  },
  Btn: {
    backgroundColor: '#263A38',
    width: 200,
    marginLeft: 85,
    padding: 6,
    borderRadius: 50,
    marginBottom: 17
  },
  Btntext: {
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    color: '#FFA948'
  },
  subhead: {
    color: '#194D10',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  imgcontainer: {
    flexDirection: 'row',
    marginLeft: 120
  },
  imgoption: {
    width: 40,
    height: 40,
    marginRight: 40,
    marginTop: 20
  }
})