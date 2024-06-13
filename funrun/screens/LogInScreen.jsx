import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router';
import { googlesignin, handleLogin } from '../services/authService';
import { GoogleAuthProvider } from 'firebase/auth';

function LogInScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login Function
  const [isFormValid, setIsFormValid] = useState(false);
    useEffect(() => {
        // Check if all required fields are filled
        if (email.trim() && password.trim()) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [email, password]);

  const login = async () => {
    //Make sure all the values have been entered - show error/disable button
    if (!isFormValid) {
      Alert.alert("Validation Error", "Please fill all the required fields.");
      return;
    }

    var success = await handleLogin(email, password);
      
      if (success) {
        Alert.alert("Log In", "You have successfully logged into FunRun.");
        return;
      }

    
  }

  // Google Authentication
  const googlelogin = () => {googlesignin()}

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/background.png')}/>
      <View>
        <Text style={styles.mainhead}>Welcome</Text>
      </View>
      <View style={styles.searchfield}>
        <TextInput style={styles.search} placeholder='Email' placeholderTextColor="#00272E"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />
      </View>
      <View>
        <TextInput style={styles.search} placeholder='Password' placeholderTextColor="#00272E"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
          secureTextEntry={true}
        />
        <Text style={styles.password}>Forgot Password?</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.Btn} onPress={login}>
          <Text style={styles.Btntext}>Log In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subhead}>------------ or ------------</Text>
        <View style={styles.imgcontainer}>
          <TouchableOpacity onPress={googlelogin}>
            <Image style={styles.imgoption} source={require('../assets/google.png')}/>
          </TouchableOpacity>
          <Image style={styles.imgoption} source={require('../assets/facebook.png')}/>
        </View>

      <View style={styles.signupcontainer}>
        <Text style={styles.signup}>
          Don't have an account
        </Text>
        {/* <Text style={styles.link}>Sign Up</Text> */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
         <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default LogInScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9E79C',
    paddingTop: 0.5,
  },
  mainhead: {
    color: '#194D10',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 7,
  },
  searchfield: {
    marginBottom: 15
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
  },
  password: {
    marginLeft: 50,
    marginTop: 5,
    marginBottom: 27,
    fontSize: 15,
    color: '#263A38'
  },
  Btn: {
    backgroundColor: '#263A38',
    width: 200,
    marginLeft: 85,
    padding: 6,
    borderRadius: 50,
    marginBottom: 25
  },
  Btntext: {
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    color: '#FFA948'
  },
  signupcontainer: {
    flexDirection: 'row',
    marginLeft: 77
  },
  signup: {
    textAlign: 'center',
    color: '#194D10'
  },
  link: {
    marginLeft: 6,
    textAlign: 'center',
    color: '#194D10',
    textDecorationLine: 'underline',
    marginBottom: 40
  },
  subhead: {
    color: '#194D10',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  imgcontainer: {
    flexDirection: 'row',
    marginLeft: 120,
    marginBottom: 20
  },
  imgoption: {
    width: 40,
    height: 40,
    marginRight: 40,
    marginTop: 20
  }
})